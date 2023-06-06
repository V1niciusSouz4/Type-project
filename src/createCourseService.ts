
interface Course {
 name: string
 duration?: number
 educator: string
};

class createCourseService {

   
    execute({ 
        duration = 8, 
        educator, 
        name 
    }: Course) 
    {
        console.log(name, duration, educator)
    }
}

export default new createCourseService();