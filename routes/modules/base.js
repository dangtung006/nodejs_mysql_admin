class BaseRouter {
    constructor(opt){
        this.router          = opt.router;
        var services         = opt.services ? opt.services : {};

        for(let key in  services) {
            this[key]  = services[key];
        }
    }
}
module.exports = BaseRouter;