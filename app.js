import express from "express"
import process from "node:process"
import pc from 'picocolors'


const app = express()
const PORT = process.env.PORT ?? 3000

app.listen(PORT, () => {
    console.log(pc.bgBlue('Server is running'))
    console.log(pc.blue(`http://localhost:${PORT}`))
})