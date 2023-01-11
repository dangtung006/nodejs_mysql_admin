const myApp = require("./init/app")();

async function main(){
    try{
        myApp.run();

    }catch(e){
        console.log(e);
    }
}

main();