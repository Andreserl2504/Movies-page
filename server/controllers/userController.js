import { createToken, verifyToken } from '../functions/jwt.js'
import { UserModel } from '../models/userModel.js'
import { validInfoForm } from '../schemas/UserLogSingSchema.js'

export class UserController {
  static async logSingUserController(req, res) {
    try {
      const result = validInfoForm(req.body.userData)
      if (result.success) {
        if (req.body.params === 's') {
          const { queryResult, isDBError } = await UserModel.createUser({
            data: result.data
          })
          if (!isDBError) {
            const token = result.data.token
              ? await createToken(result.data.userID)
              : null
            res.status(201).json({ queryResult, token })
          } else {
            throw new Error(isDBError)
          }
        } else if (req.body.params === 'l') {
          const { queryResult, isDBError } = await UserModel.getUser({
            data: result.data,
            password: result.data.password
          })
          if (!isDBError) {
            const token = result.data.token
              ? await createToken(queryResult.id)
              : null
            res.status(200).json({ queryResult, token })
          } else {
            throw new Error(isDBError)
          }
        }
      } else {
        throw new Error('Validation error')
      }
    } catch (e) {
      res.status(400).send(e.message)
    }
  }
  static async autoLogin(req, res, next) {
    if (req.body?.userData?.userIDToken) {
      try {
        const token = req.body.userData.userIDToken
        const { userID } = await verifyToken(token)
        const { queryResult } = await UserModel.getUser({ userID: userID })
        res.status(200).json({ queryResult })
      } catch (e) {
        res.status(500).send(e.message)
      }
    } else {
      next()
    }
  }
  static async getUsers(req, res) {
    try {
      const user = req.params.user
      let { queryResult } = await UserModel.getUserForMenu({ userLog: user })
      res.json({ queryResult })
    } catch (e) {
      res.status(500).send(e.message)
    }
  }
  static async getUserProfile(req, res) {
    try {
      const user = req.params.user
      if (user) {
        const { queryResult } = await UserModel.getUserProfile({
          username: user
        })
        res.status(200).json(queryResult)
      }
    } catch (e) {
      res.status(500).send(e.message)
    }
  }
  static async isFollowing(req, res) {
    try {
      const following = req.params.username
      const follower = req.params.follower
      if (!!following && following !== follower) {
        const isFollowing = await UserModel.isFollowing({
          followingID: following,
          followerID: follower
        })
        console.log(isFollowing)
        res.json(isFollowing)
      }
    } catch (e) {
      res.status(500).send(e.message)
    }
  }
  static async follow(req, res) {
    try {
      const followingID = req.body.followingID
      const followerID = req.body.followerID
      if (!!followingID && followingID !== followerID) {
        await UserModel.follow({
          followerID: followerID,
          followingID: followingID
        })
        const isFollowing = await UserModel.isFollowing({
          followingID: followingID,
          followerID: followerID
        })
        res.json(isFollowing)
      }
    } catch (e) {
      res.status(500).send(e.message)
    }
  }
  static async unFollow(req, res) {
    try {
      UserModel.unFollow({
        followerID: req.body.followerID,
        followingID: req.body.followingID
      })
    } catch (e) {
      res.status(500).send(e.message)
    }
  }
}
