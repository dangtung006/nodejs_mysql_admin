const  { router }          = require("../../init/app")();
const StudentController    = require("../../controllers/student");
const StudentService       = require("../../services/student");
const BaseRouter           = require("./base");


class StudentRouter extends BaseRouter {
    constructor(){

        super({
            router : router,
            services : {
                student : StudentService
            }
        });

        const { 
            renderList,
            handleAdd
        }  = StudentController(this);

        this.router.get("/list", renderList);
        this.router.post("/create", handleAdd);
    }
}

module.exports = StudentRouter;