import mysql from 'mysql2/promise'

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
          [data.userID, data.username, data.email, data.password]
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

  static async getUser({ data, password }) {
    try {
      if (password && data) {
        const [validation] = await connection.query(
          `
          SELECT username, email, password FROM users WHERE email = ? 
          `,
          [data.email]
          )
        if (validation[0]?.password === data.password) {
          const [queryResult] = await this.getUser({ data: validation[0] })
          return { queryResult }
        } else if (validation[0]?.password !== data.password)
          throw new Error('Incorrect Password')
        else if (validation[0].length < 1) throw new Error('This User No Exist')
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
}
