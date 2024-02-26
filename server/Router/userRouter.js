import { Router } from 'express'

export const userRouter = Router()

userRouter.post('/', (req, res) => {
  console.log(req.body)
  res.json(req.body)
})
