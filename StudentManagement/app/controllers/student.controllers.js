const {
    getList,
    getDetail,
    create,
    update,
    deleteStu
} = require("../services/student.services")

const getStudentList = (req, res) => {
    const studentList = getList();
    if (studentList){
        res.status(200).send(studentList);
    }
    else{
        res.status(404).send("Student List Not Found!");
    }
};

const getStudentDetail = (req, res) =>{
    const params = req.params;
    const id = params.id;
    const student = getDetail(id);
    if (student){
        res.status(200).send(student);
    }
    else{
        res.status(404).send("ID not found!");
    }
};

const createStudent = (req, res) => {
    let student = req.body;
    const results = create(student);
    if (student){
        res.status(200).send(results);
    }
    else{
        res.status(404).send("Create Falied!");
    }
};

const updateStudent = (req, res) => {
    const {id} = req.params;
    const {fullName, age, classes} = req.body;
    const student = update(id, fullName, age, classes);
    if (student){
        res.status(200).send(student);
    }
    else{
        res.status(404).send("Update Falied!");
    }
};

const deleteStudent = (req, res) => {
    const {id} = req.params;
    const results = deleteStu(id);
    if (results){
        res.status(200).send("Delete successful");
    }
    else{
        res.status(404).send("Delete Falied!");
    }
}

module.exports = {
    getStudentList,
    getStudentDetail,
    createStudent,
    updateStudent,
    deleteStudent
}