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
      await connection.query(
        `
      INSERT INTO users (id, username, email, password)
      VALUES (UNHEX(REPLACE(?, '-', '')), ?, ?, ?);
      `,
        [data.userID, data.username, data.email, data.password]
      )
      const [queryResult] = await this.getUser({ data: data })
      return { queryResult }
    } catch (e) {
      return { DatabaseError: 'DBERROR', ErrorInfo: e }
    }
  }
  static async getUser({ data }) {
    try {
      const [queryResult] = await connection.query(
        `
      SELECT BIN_TO_UUID(id) id, username, nickname, profile_img FROM users WHERE username = ?
      `,
        [data.username]
      )
      return queryResult
    } catch (e) {
      return { DatabaseError: 'DBERROR', ErrorInfo: e }
    }
  }
}
