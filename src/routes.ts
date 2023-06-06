import { Request, Response } from 'express';
import createCourseService from './createCourseService';

export function createCourse(request: Request, response: Response){

    createCourseService.execute('NodeJS', 10, 'Dani');
}