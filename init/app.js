const MyApp = async function(){
    console.log("init App");
    const StudentService = require("../services/student");

    //let { dataValues } = await StudentService.getById(1);
    // try{
    //     let { dataValues } = await StudentService.getList(0, 5);
    //     console.log("students : " , dataValues);
    // }catch(e){
    //     console.log("errr : " , e);
    // }

    // let data = await StudentService.getList(0, 5);
    // data     = data.map(students => students['dataValues']);
    // console.log("data : " , data);

    // let { count , rows} = await StudentService.findAndCountAll(0, 5, {});

    // console.log("count ; " , count);
    // console.log("rows ; " , rows);

    const newStudent = await StudentService.save({
        'fistName' : "Shawn",
        'lastName' : "Do"
    });
}

module.exports = MyApp;