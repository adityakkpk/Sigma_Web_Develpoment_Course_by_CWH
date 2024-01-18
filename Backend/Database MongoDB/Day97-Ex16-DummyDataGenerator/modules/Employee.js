const mongoose = require('mongoose');

const empSchema = new mongoose.Schema({
    name: String,
    salary: Number,
    language: String,
    city: String,
    isManager: Boolean,
});

const Employee = mongoose.model('Employee', empSchema);

module.exports = Employee; 