
function StudentController(opt)  {
	const {
		student : StudentService
	} = opt;

	return {
		async renderList(req, res) {
            let r = await StudentService.getList();
            r = JSON.parse(JSON.stringify(r, null, 2))
            return res.send(r);
		},
	
		async handleAdd(req, res){
            let r = await StudentService.create(req.body);
            r = JSON.parse(JSON.stringify(r, null, 2))
            return res.send(r);
		},
	
		async handleEdit(req, res){

		}
	}
}

module.exports = StudentController;