const { Sequelize, DataTypes } = require('sequelize');

const DBConfigs = {
    'database' : 'student_db',
    'username' : 'root',
    'password' : 'password',
    'host'     : 'localhost',
    'dialect'  : 'mysql'
}

const sequelize = new Sequelize(
    DBConfigs['database'], DBConfigs['username'], DBConfigs['password'],
    {
        host : DBConfigs['host'],
        dialect : DBConfigs['dialect'],
        // logging: (...msg) => console.log(msg)
    }
);

const db = {}

// db.Sequelize = Sequelize
db.sequelize = sequelize

db.subjects = sequelize.define('Subject', {
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
},{
    tableName: 'subjects'
});

db.courses = sequelize.define('Course', {
    name : {
        type : DataTypes.STRING,
        allowNull: true
    },
        
    slot : { 
        type : DataTypes.BIGINT,
        allowNull: true
    }
},{
    tableName: 'courses'
});


db.subjects.hasMany(db.courses, {
    foreignKey: 'subjectId',
    as: 'course'
});

db.courses.belongsTo(db.subjects, {
    foreignKey: 'subjectId',
    as: 'subject'
});

db.sequelize.sync({ force: false })
.then(() => {
    console.log('yes re-sync done!')
})


module.exports = db;