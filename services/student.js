const BaseService     = require("./base");
const DBHelper        = require("../init/db");
const MyDB            = new DBHelper();
const { Student }     = MyDB.models;

class StudentService extends BaseService {
    constructor(){
        super({
            limit : 5,
            skip  : 0,
            model : Student
        });
    }
}

module.exports = new StudentService();