import { z } from 'zod';

const createAcademicFacultyZodScheme = z.object({
  body: z.object({
    title: z.string({
      required_error: 'title is required',
    }),
  }),
});

const updateAcademicFacultyZodScheme = z.object({
  body: z.object({
    title: z.string({
      required_error: 'Invalid title',
    }),
  }),
});

export const AcademicFacultyValidation = {
  createAcademicFacultyZodScheme,
  updateAcademicFacultyZodScheme,
};
