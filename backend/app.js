const express = require('express');
const mongoose = require('mongoose');
const router = require('./UserRoutes/UserRoutes');
const app = express();
const cors = require('cors');

//middleware
app.use(express.json());
app.use(cors());
app.use('/students', router);

//connect to db
mongoose.connect("mongodb+srv://user:wFd2Iq91nLwrCNMR@cluster0.b6crf.mongodb.net/")
.then(() => console.log('Connected to db'))
.then(() => {app.listen(5000);})
.catch((err) => console.log(err));

