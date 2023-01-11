const { Sequelize, DataTypes } = require('sequelize');

const DBConfigs = {
    'database' : 'student_db',
    'username' : 'root',
    'password' : 'password',
    'host'     : 'localhost',
    'dialect'  : 'mysql'
}

const schema = {
    'Student' : require("../model/student.model"),
    'Subject' : require("../model/subject.model"),
    'Course'  : require("../model/course.model")
}

class MyDB {
    constructor(){
        this.sequelize = new Sequelize(
            DBConfigs['database'], DBConfigs['username'], DBConfigs['password'],
            {
                host : DBConfigs['host'],
                dialect : DBConfigs['dialect'],
                // logging: (...msg) => console.log(msg)
            }
        )

        this.models = {};

        //init tables
        for(let key in schema){
            this.models[key] = schema[key](this.sequelize, DataTypes);
        };

        // define Relalation tables : 
        this.models.Subject.hasMany(this.models.Course, { as: 'course', foreignKey: "subjectId"});
        this.models.Course.belongsTo(this.models.Subject, { as: 'subject', foreignKey: "subjectId"});



        this.sequelize
            .sync({ force : false })
            .then(r=> console.log('sync db done'))
    }
    
    async sync(){
        try {
            await this.sequelize.sync({ force : false });
            return true;
        }catch(e){
            console.log("err : " , e);
            return false;
        }
    }
}

module.exports = MyDB;