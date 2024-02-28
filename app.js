import express from 'express'
import process from 'node:process'
import pc from 'picocolors'
import { userRouter } from './server/Router/userRouter.js'

const app = express()
const PORT = process.env.PORT ?? 3000

app.use(express.json())
app.use('/server/user/', userRouter)

app.listen(PORT, () => {
  console.log(pc.bgBlue('Server is running'))
  console.log(pc.blue(`http://localhost:${PORT}`))
})
