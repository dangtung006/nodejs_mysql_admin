const { Sequelize } = require('sequelize');

const DBConfigs = {
    'database' : 'hello_world_db',
    'username' : 'root',
    'password' : 'password',
    'host'     : 'localhost',
    'dialect'  : 'mysql'
}

const MyDB = function(){
    const sequelize = new Sequelize(
        DBConfigs['database'], DBConfigs['username'], DBConfigs['password'],
        {
            host : DBConfigs['host'],
            dialect : DBConfigs['dialect'],
            // logging: (...msg) => console.log(msg)
        }
    )

    return {
        sequelize   : sequelize,
        
        load : async function(){
            try{
                await sequelize.authenticate();
                return true;
            }catch(e){
                console.log(e);
                return false;
            }
        },

        sync : async function(){
            try {
                let r = await sequelize.sync();
            }catch(e){
                console.log("err : " , e);
            }
        }
    }
}

module.exports = MyDB;