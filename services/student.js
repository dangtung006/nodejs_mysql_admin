const BaseService     = require("./base");

class StudentService extends BaseService {
    constructor(){
        super({
            limit : 5,
            skip  : 0,
            model : require("../model/student.model")
        });
    }
}

module.exports = new StudentService();