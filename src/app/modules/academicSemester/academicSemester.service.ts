import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import { academicSemesterTitlesAndCodesMapper } from './academicSemester.constant';
import { IAcademicSemester } from './academicSemester.interface';
import { AcademicSemester } from './academicSemester.model';

const createAcademicSemesterToDB = async (
  payload: IAcademicSemester
): Promise<IAcademicSemester> => {
  if (academicSemesterTitlesAndCodesMapper[payload.title] !== payload.code) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Invalid Semester code!');
  }

  const createAcademicSemester = await AcademicSemester.create(payload);
  return createAcademicSemester;
};

export const AcademicSemesterService = {
  createAcademicSemesterToDB,
};
