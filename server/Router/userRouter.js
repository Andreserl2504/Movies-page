import { Router } from 'express'
import { UserController } from '../controllers/UserController.js'


export const userRouter = Router()

userRouter.post('/', (req, res) => UserController.logSingUserController(req, res))
