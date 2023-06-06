import { Request, Response } from 'express';
import createCourseService from './createCourseService';

export function createCourse(request: Request, response: Response){

    createCourseService.execute({
        name: "NodeJS",
        educator: "Dani",
        duration: 10
    });

    createCourseService.execute({
        name: "ReactJS",
        educator: "Diego"
    });

    return response.send();
}