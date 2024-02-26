import sql from 'mysql2'

const configSQL = {
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'socialmoviesdb'
}

const connection = sql.createConnection(configSQL)

export class userModel {
  static async createUser() {}
  static async getUser() {}
}
