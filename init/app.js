const MyApp = async function(){
    console.log("init App");
    //const StudentService = require("../services/student");
    const SubjectService = require("../services/subject");
    const CourseService  = require("../services/course");

    // let r = await SubjectService.getSubjectWithCourse(1);
    // console.log(typeof JSON.stringify(r, null, 2));

    // let r = await CourseService.getCourseWithSubject(1);
    // console.log(JSON.stringify(r, null, 2));

    // await subjects.create({
    //     name : "English",
    //     credit : 5
    // });

    // await courses.create({
    //     name : "TA2019",
    //     slot : 72,
    //     subjectId : 1
    // });

    // await SubjectService.create({
    //     name : "Physics",
    //     credit : 5
    // });


    // const r = await subjects.findOne({
    //     include: [{
    //         model: courses,
    //         as: 'course'
    //     }],
    //     where: { id: 1 }
    // });

    // console.log(r);

    // await CourseService.create({
    //     name : "TA2018",
    //     slot : 72,
    //     subjectId : 1
    // });

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

    // const newStudent = await StudentService.save({
    //     'fistName' : "Shawn",
    //     'lastName' : "Do"
    // });

    // console.log("newStudent : " , newStudent);
}

module.exports = MyApp;