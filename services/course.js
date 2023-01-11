const BaseService     = require("./base");
const DBHelper        = require("../init/db");
const MyDB            = new DBHelper();
const { Subject, Course } = MyDB.models;

class CouresService extends BaseService {
    constructor(){
        super({
            limit : 5,
            skip  : 0,
            model : Course
        });
    }

    getCourseWithSubject(id){
        return this.model.findOne({ 
            where: { id : id },
            include: [{
                model : Subject,
                as    : 'subject'
            }],
        });
    }
}

module.exports = new CouresService();