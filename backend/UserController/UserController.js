const studentModel = require('../UserModel/UserModel');
// const teacherModel = require('../UserModel/UserModel');

//get all students
const getAllStudents = async (req, res, next) => {
    let students = studentModel.find();
    try {
        students = await students.find();
    }
    catch(err) {
        console.log(err);
    }

    if(!students) {
        return res.staus(404).json({
            message: 'No students found'
        });
    }
    return res.status(200).json({students});
};

exports.getAllStudents = getAllStudents;

//student Registration
const registerStudent = async (req, res, next) => {
    const {name, email, password, phone} = req.body;
    let student;
    try {
        student = new studentModel({
            name,
            email,
            password,
            phone
        });
        await student.save();
    }

    catch(err) {
        console.log(err);
    }

    if(!student) {
        return res.status(404).json({
            message: "Student's registration failed"
        });
    }
    return res.status(200).json({student});
}

exports.registerStudent = registerStudent;

// teacher Registration
// const registerTeacher = async (req, res, next) => {
//     const {name, email, password, phone} = req.body;
//     let teacher;
//     try {
//         teacher = new teacherModel({
//             name,
//             email,
//             password,
//             phone
//         });
//         await teacher.save();
//     }
//     catch(err) {
//         console.log(err);
//     }

//     if(!teacher) {
//         return res.status(404).json({
//             message: "Teacher's registration failed"
//         });
//     }
//     return res.staus(200).json({teacher});
// }

// exports.registerTeacher = registerTeacher;