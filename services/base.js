class BaseService {
    constructor(opt){
        this.model   = opt.model;
        this.limit   = opt.limit ? opt.limit : 10;
        this.offset  = opt.skip ? opt.skip   : 0;

        this.model.sync();
    }

    // Get Data
    getById(id) {
        id = id ? id : 0;
        return this.model.findOne({ where: { id : id } });
    }

    getList(page, limit){
        this.page  = page  ? page  : this.page;
        this.limit = limit ? limit : this.limit;
        return this.model.findAll({  offset: page , limit: this.limit});
    }

    findAndCountAll(page, limit, query){
        this.page  = page  ? page  : this.page;
        this.limit = limit ? limit : this.limit;

        return this.model.findAndCountAll({
            where: query,
            offset: this.page,
            limit: this.limit
        });
    }
    
    // Handle Data
    async save(options){
        let row = await this.getById(options.id);
        if(!row) return await this.create(options);
        return await this.update(row, options);
    }

    create(options) {
        return this.model.create(options);
    }

    // updateOne(filter, fields = {}){
    //     return this.model.updateOne(filter , fields);
    // }

    // replaceOne(id, fields = {}){
    //     return this.model.replaceOne({ _id : id}, fields)
    // }


    // deleteById(id){
    //     return this.model.deleteOne({ _id : id });
    // }

    // updateOne(filter = {} , fields ={}){
    //     return this.model.updateOne(filter, { $set : fields });
    // }

    // updateMany(filter = {} , fields ={}){
    //     return this.model.updateMany(filter, { $set : fields });
    // }

    async update(row, fieldNames){
        if(
            !this.isOBJ(row) || 
            !this.isOBJ(fieldNames)
        ) 
            throw new Error("In valid Data Types");
        
        let updateInfo = {};

        for(let key in fieldNames){
            if(typeof fieldNames[key] != 'undefined') {
                updateInfo[key] = fieldNames[key];
            }
        }

        row.set(updateInfo);
        return await row.save();
    }

    isOBJ(opt){
        if (
            typeof opt === 'object' &&
            !Array.isArray(opt) &&
            opt !== null
        ) {
            return true;
        }
        return false;
    }
}

module.exports = BaseService