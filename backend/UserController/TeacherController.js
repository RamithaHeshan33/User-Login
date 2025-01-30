const teacherModel = require('../UserModel/TeacherModel');

//get all teachers
const getAllTeachers = async (req, res, next) => {
    let teachers = teacherModel.find();
    try {
        teachers = await teachers.find();
    }
    catch(err) {
        console.log(err);
    }

    if(!teachers) {
        return res.staus(404).json({
            message: 'No teachers found'
        });
    }
    return res.status(200).json({teachers});
}

exports.getAllTeachers = getAllTeachers;

//teacher Registration
const registerTeacher = async (req, res, next) => {
    const {name, email, password, phone} = req.body;
    let teacher;
    try {
        teacher = new teacherModel({
            name,
            email,
            password,
            phone
        });
        await teacher.save();
    }

    catch(err) {
        console.log(err);
    }

    if(!teacher) {
        return res.status(404).json({
            message: "Teacher's registration failed"
        });
    }
    return res.status(200).json({teacher});
}

exports.registerTeacher = registerTeacher;

//teacher login
const loginTeacher = async (req, res, next) => {
    const {email, password} = req.body;
    let teacher;
    try {
        teacher = await teacherModel.findOne({email, password}).select("-password");
    } catch(err) {
        console.log(err);
    }

    if(!teacher) {
        return res.status(404).json({
            message: "Invalid email or password"
        });
    }
    return res.status(200).json({teacher});
}

exports.loginTeacher = loginTeacher;