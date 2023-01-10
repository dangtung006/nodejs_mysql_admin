const { Sequelize } = require('sequelize');

const DBConfigs = {
    'database' : 'hello_world_db',
    'username' : '',
    'password' : '123456',
    'host'     : 'localhost',
    'dialect'  : 'mysql'
}

const MyDB = function(){
    const db = new Sequelize(
        DBConfigs['database'], DBConfigs['username'], DBConfigs['password'],
        {
            host : DBConfigs['host'],
            dialect : DBConfigs['dialect'],
            logging: (...msg) => console.log(msg)
        }
    )

    return {
        load : async function(){
            try{
                await db.authenticate();
                return true;
            }catch(e){
                console.log(e);
                return false;
            }
        }
    }
}

module.exports = MyDB;