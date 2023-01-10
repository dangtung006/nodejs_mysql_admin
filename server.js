const MyDB = require("./init/db")();

async function main(){
    try{
        await MyDB.load();
    }catch(e){
        console.log(e);
    }
}

main();