const express = require('express')
const studentRouter = express.Router()
const {
    getStudentList,
    getStudentDetail,
    createStudent,
    updateStudent,
    deleteStudent
} = require("../controllers/student.controllers")

const {
    logFeature1
} = require("../middlewares/loggers/log-feature")

const {
    checkEmpty,
    checkClass
} = require("../middlewares/validations/student.validation")

// Get students list
studentRouter.get(
    "/", 
    logFeature1,
    getStudentList
);

// Get the detail information of a student
studentRouter.get("/:id", getStudentDetail);

// Create a student
studentRouter.post("/", checkEmpty, checkClass, createStudent);

// Update a student
studentRouter.put("/:id", updateStudent);

// Delete a student
studentRouter.delete("/:id", deleteStudent);

module.exports = studentRouter;