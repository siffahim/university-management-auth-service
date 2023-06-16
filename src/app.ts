import cors from 'cors';
import express, { Application, NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import routers from './app/routers';
const app: Application = express();

//middleware and parser
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Application routes:>
app.use('/api/v1', routers);
// app.use('/api/v1/users', UserRoutes);
// app.use('/api/v1/academic-semester', AcademicSemesterRoutes);

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

//not found route
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: 'Not Found',
    errorMessages: [
      {
        path: req.originalUrl,
        message: 'Api not found',
      },
    ],
  });
  next();
});

export default app;
