let studentList = [
    {
        "id" : 1,
        "fullName" : "Nguyễn Anh Tường 1",
        "age" : 18,
        "classes" : "12H"
    },
    {
        "id" : 2,
        "fullName" : "Nguyễn Anh Tường 2",
        "age" : 18,
        "classes" : "12H"
    },
    {
        "id" : 3,
        "fullName" : "Nguyễn Anh Tường 3",
        "age" : 18,
        "classes" : "12H"
    },
]

const getList = () => {
    if (studentList){
        return studentList;
    }
    else{
        return false;
    }
};

const getDetail = (id) => {
    const index = studentList.findIndex((student) => {
        return student.id == id
    })

    if (index !== -1){
        const student = studentList[index];
        return student;
    }
    else{
        return false;
    }
};

const create = (student) => {
    student = {
        id : Math.random(),
        ...student
    }
    studentList = [...studentList, student];
    return student;
}

const update = (id,fullName, age, classes) => {
    const index = studentList.findIndex((student) => student.id == id);
    if (index !== -1){
        const oldStudent = studentList[index];
        const updatedStudent = { ...oldStudent, fullName, age, classes};
        studentList[index] = updatedStudent;
        return updatedStudent;
    }
    else{
        return false;
    }
}

const deleteStu = (id) => {
    const index = studentList.findIndex((student) => student.id == id);
    if (index !== -1){
        studentList.splice(index, 1);
        return true;
    }
    else{
        return false;
    }
};

module.exports = {
    getList,
    getDetail,
    create,
    update,
    deleteStu
}