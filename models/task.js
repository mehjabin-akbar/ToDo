const mongoose = require('mongoose');
const task = require('../models/task');
const taskSchema = new mongoose.Schema({
    taskid:{
        type : Number,
        unique : true,
        required : true
    },
    taskname : {
        type : String,
        required : true
    }
});

module.exports = mongoose.model("task",taskSchema); 
