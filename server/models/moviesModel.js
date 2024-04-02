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
  static async isInListFavorite({ userID, imdbID }) {
    try {
      const [isInList] = await connection.query(
        `
      SELECT imdbID FROM favorite_movies
      WHERE BIN_TO_UUID(user_id) = ? AND imdbID = ?
      `,
        [userID, imdbID]
      )
      if (isInList.length > 0) {
        return true
      } else {
        return false
      }
    } catch (e) {
      return new Error(e)
    }
  }
  static async lenListFavorite({ userID }) {
    try {
      const [lenList] = await connection.query(
        `
        SELECT count(user_id) FROM favorite_movies 
        WHERE BIN_TO_UUID(user_id) = ?
        `,
        [userID]
      )
      if (lenList[0]['count(user_id)'] < 3) {
        return true
      } else {
        return false
      }
    } catch (e) {
      return new Error(e)
    }
  }
  static async addToFavoriteList({ userID, imdbID }) {
    try {
      await connection.query(
        `
        INSERT INTO favorite_movies (user_id, imdbID)
        VALUES (UNHEX(REPLACE(?, '-', '')), ?);
        `,
        [userID, imdbID]
      )
    } catch (e) {
      return new Error(e)
    }
  }
  static async deleteToFavoriteList({ userID, imdbID }) {
    try {
      await connection.query(
        `
      DELETE FROM favorite_movies WHERE BIN_TO_UUID(user_id) = ? AND imdbID = ? 
      `,
        [userID, imdbID]
      )
      return true
    } catch (e) {
      return new Error(e)
    }
  }
}
