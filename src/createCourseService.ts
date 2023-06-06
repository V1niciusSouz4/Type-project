
/**
 * name - string
 * duration - number
 * educator - string
 */

class createCourseService {


    execute(name: string, duration: number, educator: string) {
        console.log(name, duration, educator)
    }
}

export default new createCourseService();