const express = require('express');
const mongoose = require('mongoose');
const router = require('./UserRoutes/UserRoutes');
const app = express();

//middleware
app.use(express.json());
app.use('/students', router);

//connect to db
mongoose.connect("mongodb+srv://user:wFd2Iq91nLwrCNMR@cluster0.b6crf.mongodb.net/")
.then(() => console.log('Connected to db'))
.then(() => {app.listen(5000);})
.catch((err) => console.log(err));


//Call register model
// require('./UserModel/TeacherModel');
// const TeacherRegister = mongoose.model('TeacherRegister');
// app.post('/register', async (req,res) => {
//     const {name, email, password, phone} = req.body;
//     try {
//         await TeacherRegister.create({
//             name, email, password, phone
//         })
//         res.send({status: "User Registered"})
//     }
//     catch(err) {
//         res.send({status: "Registration Failed"})
//     }
// })

