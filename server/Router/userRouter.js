import { Router } from 'express'
import { userController } from '../controllers/userController.js'


export const userRouter = Router()

userRouter.post('/', (req, res) => userController.logSingUserController(req, res))
