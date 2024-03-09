import mysql from 'mysql2/promise'
import bcrypt from 'bcryptjs'

const config = {
  host: 'localhost',
  user: 'root',
  port: 3306,
  password: '',
  database: 'socialmoviesdb'
}

const connection = await mysql.createConnection(config)

export class UserModel {
  static async createUser({ data }) {
    const passwordHash = await bcrypt.hash(data.password, 10)
    try {
      const [validation] = await connection.query(
        `
      SELECT username, email FROM users WHERE username = ? OR email = ?`,
        [data.username, data.email]
      )
      if (
        validation[0]?.username !== data.username &&
        validation[0]?.email !== data.email
      ) {
        await connection.query(
          `
        INSERT INTO users (id, username, email, password)
        VALUES (UNHEX(REPLACE(?, '-', '')), ?, ?, ?);
        `,
          [data.userID, data.username, data.email, passwordHash]
        )
        const [queryResult] = await this.getUser({ data: data })
        return { queryResult }
      } else {
        if (
          validation[0].username === data.username &&
          validation[0].email === data.email
        )
          throw new Error('User exist  already')
        else if (validation[0].username === data.username)
          throw new Error('Username exist already')
        else if (validation[0].email === data.email)
          throw new Error('Email exist already')
        else throw new Error('Something is Broken')
      }
    } catch (e) {
      const isDBError = e.message
      return { isDBError }
    }
  }

  static async getUser({ data, password, userID }) {
    try {
      if (userID) {
        const [query] = await connection.query(
          `
        SELECT BIN_TO_UUID(id) id, username, nickname, profile_img FROM users WHERE BIN_TO_UUID(id) = ?
        `,
          [userID]
        )
        const [queryResult] = query
        return { queryResult }
      } else if (password && data) {
        const [validation] = await connection.query(
          `
          SELECT username, email, password FROM users WHERE email = ? 
          `,
          [data.email]
        )
        const comparePassword =
          !validation.length < 1
            ? await bcrypt.compare(password, validation[0]?.password)
            : null
        if (comparePassword === true) {
          const [queryResult] = await this.getUser({ data: validation[0] })
          return { queryResult }
        } else if (validation.length < 1) throw new Error('This User No Exist')
        else if (comparePassword === false)
          throw new Error('Incorrect Password')
        else throw new Error('Something is broken')
      } else {
        const [queryResult] = await connection.query(
          `
        SELECT BIN_TO_UUID(id) id, username, nickname, profile_img FROM users WHERE username = ?
        `,
          [data.username]
        )
        return queryResult
      }
    } catch (e) {
      const isDBError = e.message
      return { isDBError }
    }
  }
  static async getUserForMenu() {
    try {
      const [queryResult] = await connection.query(`
      SELECT username, nickname, profile_img FROM users ORDER BY RAND() LIMIT 5
      `)
      return { queryResult }
    } catch (e) {
      return new Error(e.message)
    }
  }
}
