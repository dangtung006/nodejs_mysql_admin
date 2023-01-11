const { router }           = require("../init/app")();


const RouterList = [
    {
        'route' : '/student',
        'class' : require("./modules/student")
    }
]


class AppRouter {
    constructor(){
        this.appRouter  = router;
        for(let idx=0; idx < RouterList.length; idx++){
            this.appRouter.use(RouterList[idx].route, new RouterList[idx]['class']().router );
        }

    }
}   

module.exports = AppRouter;