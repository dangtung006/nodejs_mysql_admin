const BaseService     = require("./base");
const DBHelper        = require("../init/db");
const MyDB            = new DBHelper();
const { Subject, Course } = MyDB.models;

class SubjectService extends BaseService {
    constructor(){
        super({
            limit : 5,
            skip  : 0,
            model : Subject
        });
    }

    getSubjectWithCourse(id){
        return this.model.findOne({ 
            include: [{
                model : Course,
                as    : 'course'
            }],
            where: { id : id }
        });
    }
}

module.exports = new SubjectService();