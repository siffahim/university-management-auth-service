import config from '../../../config';
import { IUser } from './user.interface';
import { User } from './user.model';

const createUserToDB = async (user: IUser): Promise<IUser | null> => {
  /* const info = {
    code: '01',
    year: '2025',
  }; */
  //auto generated incremental Id
  //const id = await generateStudentId(info);

  //user.id = id;

  //default password
  if (!user.password) {
    user.password = config.default_user_pass as string;
  }

  const createUser = await User.create(user);

  if (!createUser) {
    throw new Error('Failed to create user!');
  }

  return createUser;
};

export const UserService = {
  createUserToDB,
};
