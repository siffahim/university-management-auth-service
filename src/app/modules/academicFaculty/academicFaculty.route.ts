import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { AcademicFacultyController } from './academicFaculty.controller';
import { AcademicFacultyValidation } from './academicFaculty.validation';
const router = express.Router();

router.post(
  '/create-faculty',
  validateRequest(AcademicFacultyValidation.createAcademicFacultyZodScheme),
  AcademicFacultyController.createAcademicFaculty
);

router.get('/:id', AcademicFacultyController.getSingleAcademicFaculty);

router.patch(
  '/:id',
  validateRequest(AcademicFacultyValidation.updateAcademicFacultyZodScheme),
  AcademicFacultyController.updateAcademicFaculty
);

router.delete('/:id', AcademicFacultyController.deleteAcademicFaculty);

router.get('/', AcademicFacultyController.getAllAcademicFaculties);

export const AcademicFacultyRoutes = router;
