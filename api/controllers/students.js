const Student = require("../models/student");


const createStudent = async(req, res, next) => {
    try {
        const student = new Student({
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          dateOfBirth: req.body.dateOfBirth,
          class: req.body.class,
          address: req.body.address,
          contactNumber: req.body.contactNumber,
        });
    
        const result = await student.save();
        console.log(result);
        res.status(201).json({
          message: "Student Created successfully",
        });
      } catch (err) {
        console.error(err);
        res.status(500).json({
          error: "Internal Server Error",
        });
      }
};

const getAllStudents = async(req, res, next) => {
    try {
        const docs = await Student.find();
    
        res.status(200).json(docs);
      } catch (err) {
        console.error(err);
        res.status(500).json({
          error: "Internal Server Error",
        });
      }
};

const getStudentById = async(req, res, next) => {
    try {
        const doc = await Student.findById(req.params.id);
        if (!doc) {
          return res.status(404).json({
            error: "Student not found",
          });
        }
        res.status(200).json(doc);
      } catch (err) {
        console.error(err);
        res.status(500).json({
          error: "Internal Server Error",
        });
      }
};

const updateStudentById = async(req , res, next) =>{
    try {
        const result = await Student.findOneAndUpdate(
          { _id: req.params.id },
          {
            $set: {
              firstName: req.body.firstName,
              lastName: req.body.lastName,
              dateOfBirth: req.body.dateOfBirth,
              class: req.body.class,
              address: req.body.address,
              contactNumber: req.body.contactNumber,
            },
          },
          { new: true }
        );
        if (!result) {
          return res.status(404).json({
            error: "Student not found",
          });
        }
        res.status(200).json({
          message: "Student Updated successfully",
          student: result,
        });
      } catch (err) {
        console.error(err);
        res.status(500).json({
          error: "Internal Server Error",
        });
      }
};

const deleteStudentById = async(req, res, next) => {
    try {
        const result = await Student.deleteOne({ _id: req.params.id });
        if (!result) {
          return res.status(404).json({
            error: "Student not found",
          });
        }
        res.status(200).json({
          message: "Student Deleted successfully",
          student: result,
        });
      } catch (err) {
        console.error(err);
        res.status(500).json({
          error: "Internal Server Error",
        });
      }
};


module.exports = {
    createStudent,
    getAllStudents,
    getStudentById,
    updateStudentById,
    deleteStudentById,
}