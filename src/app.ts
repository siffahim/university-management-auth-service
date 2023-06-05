import cors from "cors";
import express, { Application, Request, Response } from "express";
const app: Application = express();
const port = 5000;


//middleware and parser
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.get("/", async (req: Request, res: Response) => {
    res.send("Hello World")
})

export default app;