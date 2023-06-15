import cors from 'cors';
import express, { Application } from 'express';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import { UserRoutes } from './app/modules/user/user.route';
const app: Application = express();

//middleware and parser
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Application routes:>
app.use('/api/v1/users/', UserRoutes);

//Testing
// app.get('/', (req: Request, res: Response, next: NextFunction) => {
//   throw new ApiError(400, 'Ore baba error')
//   //throw new Error('Error created');
//   //next('ore baba error')
// })

// app.get('/', (req, res, next) => {
//   //Promise.reject(new Error('Unhandled promise reject')) // unhandled rejection
//   console.log(X)
// })

// app.get('/', async (req, res, next) => {
//   throw new Error('Testing Error logger')
// })

//global handler
app.use(globalErrorHandler);

export default app;
