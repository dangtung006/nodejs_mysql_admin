module.exports = function(sequelize, DataTypes){
    return sequelize.define('Faculty', 
        {
            id  : {
                type : DataTypes.BIGINT,
                allowNull : false,
                autoIncrement : true,
                primaryKey : true
            },
        
            name : { 
                type: DataTypes.STRING,
                allowNull: true
            },
        
            foundationYear : {
                type: DataTypes.DATE,
                allowNull : true
            },
        
            description : {
                type: DataTypes.STRING,
                allowNull : true
            }
        },
        {
            tableName: 'faculties'
        }
    );
}