import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { paginationFields } from '../../../constants/pagination';
import catchAsync from '../../../shared/catchAsync';
import pick from '../../../shared/pick';
import sendResponse from '../../../shared/sendResponse';
import { IAcademicDepartment } from './academicDepartment.interface';
import { AcademicDepartmentService } from './academicDepartment.service';

const createAcademicDepartment = catchAsync(
  async (req: Request, res: Response) => {
    const { ...academicDepartmentData } = req.body;
    const result = await AcademicDepartmentService.createAcademicDepartmentToDB(
      academicDepartmentData
    );

    sendResponse<IAcademicDepartment>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Academic department is created successfully',
      data: result,
    });
  }
);

const getAllAcademicDepartment = catchAsync(
  async (req: Request, res: Response) => {
    const paginationOptions = pick(req.query, paginationFields);
    const filters = pick(req.query, ['searchTerm', 'title']);
    const result = await AcademicDepartmentService.getAcademicDepartmentFromDB(
      filters,
      paginationOptions
    );

    sendResponse<IAcademicDepartment[]>(res, {
      statusCode: httpStatus.OK,
      success: true,
      meta: result?.meta,
      message: 'Academic departments retrieved successfully',
      data: result?.data,
    });
  }
);

//single data collect
const getSingleAcademicDepartment = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const result =
      await AcademicDepartmentService.getSingleAcademicDepartmentFromDB(id);

    sendResponse<IAcademicDepartment>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Academic department retrieved successfully',
      data: result,
    });
  }
);

//update
const updateAcademicDepartment = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const updatedData = req.body;
    const result = await AcademicDepartmentService.updateAcademicDepartmentToDB(
      id,
      updatedData
    );

    sendResponse<IAcademicDepartment>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Academic department updated successfully',
      data: result,
    });
  }
);

//update
const deleteAcademicDepartment = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const result = await AcademicDepartmentService.deleteAcademicDepartmentToDB(
      id
    );

    sendResponse<IAcademicDepartment>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Academic department deleted successfully',
      data: result,
    });
  }
);

export const AcademicDepartmentController = {
  createAcademicDepartment,
  getAllAcademicDepartment,
  getSingleAcademicDepartment,
  updateAcademicDepartment,
  deleteAcademicDepartment,
};
