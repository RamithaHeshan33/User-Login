const express = require('express');
const router = express.Router();
const userController = require('../UserController/UserController');
const studentModel = require('../UserModel/UserModel');

router.get('/', userController.getAllStudents);
router.post('/', userController.registerStudent);

// router.post('/teacher', userController.registerTeacher);

module.exports = router;