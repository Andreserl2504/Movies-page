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
      console.log(data)
      // const [result] = await connection.query(`
      // INSERT INTO users ( id, username, email, password)
      // VALUES (UNHEX(REPLACE(?, '-', '')), ?, ?, ?)
      // `, [data.userID, data.username, data.email, data.password])
      // console.log(result)
      return { result }

    } catch (e) {
      return { DatabaseError: 'DBERROR', ErrorInfo: e }
    }
  }
  static async getUser() {}
}
