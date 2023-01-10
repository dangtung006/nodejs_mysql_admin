const { Model, DataTypes, Deferrable } = require("sequelize");
const { sequelize }                           = require("../init/db")();

class Student extends Model {
    // constructor(){
    //     this.option = {
    //         sequelize ,
    //         modelName: 'students',
    //         indexes: []
    //     }
    // }
};

Student.init(
    {
        id  : {
            type : DataTypes.BIGINT,
            allowNull : false,
            autoIncrement : true,
            primaryKey : true
        },

        dob : { 
            type: DataTypes.DATE,
            allowNull: true
        },

        fistName : { 
            type: DataTypes.STRING, 
            allowNull: true
        },

        lastName : { 
            type: DataTypes.STRING, 
            allowNull: true
        }

    }, 

    {
        sequelize ,
        modelName: 'students',
        indexes: []
    }
);

module.exports = Student;