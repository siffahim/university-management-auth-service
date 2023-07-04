import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { UserService } from './user.service';

const createStudent = catchAsync(async (req: Request, res: Response) => {
  const { student, ...userData } = req.body;
  const result = await UserService.createStudentToDB(student, userData);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User created successfully',
    data: result,
  });
});

const createFaculty = catchAsync(async (req: Request, res: Response) => {
  const { faculty, ...userData } = req.body;
  const result = await UserService.createFacultyToDB(faculty, userData);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User created successfully',
    data: result,
  });
});

export const UserController = {
  createStudent,
  createFaculty,
};

// try {
//     /*
//         <--Zod error handle-->
//     */

//     //req-validation
//     //body --> object
//     //data --> object

//     /* const createUserZodSchema = z.object({
//       body: z.object({
//         role: z.string({
//           required_error: 'role is required',
//         }),
//         password: z.string().optional(),
//       }),
//     })
//     await createUserZodSchema.parseAsync(req) */

//     const { user } = req.body;
//     const result = await UserService.createUserToDB(user);

//     sendResponse(res, {
//       statusCode: httpStatus.OK,
//       success: true,
//       message: 'User created successfully',
//       data: result,
//     });

//     /*  res.status(200).json({
//       success: true,
//       message: 'User created successfully',
//       data: result,
//     }); */
//   } catch (err) {
//     next(err);
//     /* res.status(200).json({
//       success: false,
//       message: 'Failed to create user',
//     }) */
//   }
// };
