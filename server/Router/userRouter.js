import { Router } from 'express'
import { UserController } from '../controllers/userController.js'

export const userRouter = Router()

userRouter.use('/', (req, res, next) =>
  UserController.autoLogin(req, res, next)
)

userRouter.post('/', (req, res) =>
  UserController.logSingUserController(req, res)
)

userRouter.post('/follow', (req, res) => UserController.follow(req, res))

userRouter.get('/menuUser/:user', (req, res) =>
  UserController.getUsers(req, res)
)

userRouter.get('/userProfile/:user', (req, res) =>
  UserController.getUserProfile(req, res)
)

userRouter.get('/isFollowing/:username/:follower', (req, res) =>
  UserController.isFollowing(req, res)
)
