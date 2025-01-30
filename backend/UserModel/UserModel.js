const e = require('express');
const mongoose = require('mongoose');
const userSchema = mongoose.Schema;
const studentModel = new userSchema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('StudentTable', studentModel);

