import { NextFunction, Request, Response } from 'express';
import { UserService } from './user.service';

const createUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    /*
        <--Zod error handle-->
    */

    //req-validation
    //body --> object
    //data --> object

    /* const createUserZodSchema = z.object({
      body: z.object({
        role: z.string({
          required_error: 'role is required',
        }),
        password: z.string().optional(),
      }),
    })
    await createUserZodSchema.parseAsync(req) */

    const { user } = req.body;
    const result = await UserService.createUserToDB(user);

    res.status(200).json({
      success: true,
      message: 'User created successfully',
      data: result,
    });
  } catch (err) {
    next(err);
    /* res.status(200).json({
      success: false,
      message: 'Failed to create user',
    }) */
  }
};

export const UserController = {
  createUser,
};
