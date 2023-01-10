const MyDB = require("./init/db")();

async function main(){
    try{
        await MyDB.load();
        require("./init/app")();
    }catch(e){
        console.log(e);
    }
}

main();