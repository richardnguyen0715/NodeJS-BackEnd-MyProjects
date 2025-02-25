const express = require('express');
const studentRouter = require('./student.routers');
const router = express.Router();

// url <=> http://localhost:3000
// router.use(studentRouter);

// url <=> http://localhost:3000/students => You can remove "/students/" in app.get()
router.use("/students", studentRouter)

module.exports = router;