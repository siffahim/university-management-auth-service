import cors from 'cors'
import express, { Application, Request, Response } from 'express'
import userRouter from './app/modules/users/users.route'
const app: Application = express()

//middleware and parser
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//Application routes:>
app.use('/api/v1/users/', userRouter)

//Testing
app.get('/', (req: Request, res: Response) => {
  res.send('Working successfully')
})

export default app
