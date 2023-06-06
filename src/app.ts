import cors from 'cors'
import express, { Application, Request } from 'express'
const app: Application = express()

//middleware and parser
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', async (req: Request, res: any) => {
  res.send('Hello World')
})

export default app
