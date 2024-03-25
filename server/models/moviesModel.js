import { connection } from './sqlConnection.js'

export class moviesModel {
  static async getFavorite({ username }) {
    try {
      const [queryResult] = await connection.query(
        `
        SELECT imdbID FROM favorite_movies 
        WHERE BIN_TO_UUID(user_id) = (SELECT BIN_TO_UUID(id) id FROM users 
            WHERE username = ?)
        `,
        [username]
      )
      return { queryResult }
    } catch (e) {
      return new Error(e)
    }
  }
}
