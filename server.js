async function main(){
    try{
        //setup app;
        require("./init/app")();

    }catch(e){
        console.log(e);
    }
}

main();