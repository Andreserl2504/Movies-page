import { connection } from './sqlConnection.js'
import bcrypt from 'bcryptjs'

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
  static async getUserForMenu({ userLog }) {
    try {
      const [queryResult] = await connection.query(
        `
      SELECT BIN_TO_UUID(id) id, username, nickname, profile_img FROM users WHERE username <> ? ORDER BY RAND() LIMIT 5
      `,
        [userLog]
      )
      return { queryResult }
    } catch (e) {
      return new Error(e.message)
    }
  }

  static async getUserProfile({ username }) {
    try {
      const [userInfo] = await connection.query(
        `
      SELECT BIN_TO_UUID(id) id, username, nickname, profile_img, description FROM users WHERE username = ?
      `,
        [username]
      )
      const [following] = await connection.query(
        `
      SELECT count(following_id) FROM followers WHERE BIN_TO_UUID(follower_id) = ?     
      `,
        [userInfo[0].id]
      )
      const [followers] = await connection.query(
        `
      SELECT count(follower_id) FROM followers WHERE BIN_TO_UUID(following_id) = ?     
      `,
        [userInfo[0].id]
      )
      const queryResult = {
        profileInfo: userInfo[0],
        following: following[0]['count(following_id)'],
        followers: followers[0]['count(follower_id)']
      }
      return { queryResult }
    } catch (e) {
      return new Error(e.message)
    }
  }
  static async isFollowing({ followingID, followerID }) {
    try {
      const [isFollowing] = await connection.query(
        `SELECT BIN_TO_UUID(following_id) FROM followers
        WHERE BIN_TO_UUID(following_id) = ?
        AND
        BIN_TO_UUID(follower_id) = ?`,
        [followingID, followerID]
      )
      console.log(isFollowing)
      if (isFollowing.length > 0) {
        return true
      } else {
        return false
      }
    } catch (e) {
      return new Error(e.message)
    }
  }
  static async follow({ followerID, followingID }) {
    try {
      await connection.query(
        `
        INSERT INTO followers (follower_id, following_id)
        VALUES (UNHEX(REPLACE(?, '-', '')), UNHEX(REPLACE(?, '-', '')))
      `,
        [followerID, followingID]
      )
    } catch (e) {
      return new Error(e.message)
    }
  }
  static async unFollow({ followerID, followingID }) {
    try {
      connection.query(
        `
      DELETE FROM followers WHERE BIN_TO_UUID(follower_id) = ? AND BIN_TOUUD(following_id) = ?
      `[(followerID, followingID)]
      )
    } catch (e) {
      return new Error(e.message)
    }
  }
}
