const mongoose = require('mongoose');
const { Schema } = mongoose;
const dataschema = new Schema(
    {
        Name: String, // String is shorthand for {type: String}
        Registartion_number: Number,
        Marks: Number,
});
module.exports = mongoose.model('Studentshere', dataschema,'StudentsMarks');
