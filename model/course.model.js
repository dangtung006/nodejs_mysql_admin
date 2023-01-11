module.exports = function(sequelize, DataTypes){
    return sequelize.define('Course', 
        {
            name : {
                type : DataTypes.STRING,
                allowNull: true
            },
        
            slot : { 
                type : DataTypes.BIGINT,
                allowNull: true
            }
        },
        {
            tableName: 'courses'
        }
    );
}