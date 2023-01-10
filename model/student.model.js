const { Model, DataTypes, Deferrable } = require("sequelize");
const { db }                           = require("../init/db")();

class Student extends Model {
    constructor(){
        this.option = {
            sequelize : db,
            modelName: 'student',
            indexes: []
        }
    }
};

Student.init({
    dob : { type: DataTypes.DATE },
    fistName : { type: DataTypes.STRING, allowNull: true},
    lastName : { type: DataTypes.STRING, allowNull: true},
    id       : { type: DataTypes.STRING, allowNull: true}
}, Student.option);

module.exports = Student;