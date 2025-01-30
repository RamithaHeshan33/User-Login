const express = require('express');
const router = express.Router();
const userController = require('../UserController/UserController');
const teacherController = require('../UserController/TeacherController');
const studentModel = require('../UserModel/UserModel');

router.get('/', userController.getAllStudents);
router.post('/', userController.registerStudent);

router.post('/login', userController.loginStudent);


router.get('/teachers', teacherController.getAllTeachers);
router.post('/teachers', teacherController.registerTeacher);
router.post('/teachers/login', teacherController.loginTeacher);

module.exports = router;