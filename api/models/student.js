const mongoose = require('mongoose')
const studentSchema = mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    dateOfBirth: { type: Date , required: true },
    class: { type: String , required: true},
    address: { type: String, required: true},
    contactNumber: { type: String ,  required: true},

});
module.exports= mongoose.model('Student', studentSchema);