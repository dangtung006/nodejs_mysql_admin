const MyApp = function() {
    const express     = require("express");
    const app         = express();
    const port        = 3000;
    const masterRoute = require("../routes/index");

    return {
        app     : app,

        router  : express.Router(),

        run     : function(){
            app.use(express.json());
            app.use(express.urlencoded({extended : true}));

            const myRoute  = new masterRoute();
            app.use('/', myRoute.appRouter);

            const server = app.listen(port, ()=>{
                var _host = server.address().address;
                var _port = server.address().port;
                console.log("app listening at http://%s:%s", _host,  _port)
            });
        }
    }
}

module.exports = MyApp;