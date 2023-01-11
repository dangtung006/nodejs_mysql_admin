module.exports = function(sequelize, DataTypes){
    return sequelize.define('Subject', 
        {
            name : { 
                type: DataTypes.STRING,
                allowNull: true
            },
        
            year : {
                type: DataTypes.DATE,
                allowNull : true
            },
        
            credit : {
                type: DataTypes.INTEGER,
                allowNull : true
            }
        },
        {
            tableName: 'subjects'
        }
    );
}