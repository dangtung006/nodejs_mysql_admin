
module.exports = function(sequelize, DataTypes){
    return sequelize.define('Student', 
        {
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
            tableName: 'students'
        }
    );
}