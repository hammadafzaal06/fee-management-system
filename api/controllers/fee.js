const Fee = require("../models/fee");


const createFee = async(req, res , next) => {
    try {
        const fee = new Fee({
          student: req.body.student,
          feeCategory: req.body.feeCategory,
          amount: req.body.amount,
          dueDate: req.body.dueDate,
          status: req.body.status,
        });
    
        const result = await fee.save();
        console.log(result);
        res.status(201).json({
          message: "Fee Record Created successfully",
        });
      } catch (err) {
        console.error(err);
        res.status(500).json({
          error: "Internal Server Error",
        });
      }
};

const getAllFee = async(req, res , next ) => {
    try {
        const docs = await Fee.find().populate("student  feeCategory");
        res.status(200).json(docs);
      } catch (err) {
        console.error(err);
        res.status(500).json({
          error: "Internal Server Error",
        });
      }
};

const getFeeById = async(req, res, next ) => {
    try {
        const doc = await Fee.findById(req.params.id).populate(
          "student  feeCategory"
        );
        if (!doc) {
          return res.status(404).json({
            error: "Fee not found",
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

const updateFeeById = async(req, res, next ) => {
    try {
        const result = await Fee.findOneAndUpdate(
          { _id: req.params.id },
          {
            $set: {
              student: req.body.student,
              feeCategory: req.body.feeCategory,
              amount: req.body.amount,
              dueDate: req.body.dueDate,
              status: req.body.status,
            },
          },
          { new: true }
        );
        if (!result) {
          return res.status(404).json({
            error: "Fee not found",
          });
        }
        res.status(200).json({
          message: "Fee Record Updated successfully",
          fee: result,
        });
      } catch (err) {
        console.error(err);
        res.status(500).json({
          error: "Internal Server Error",
        });
      }
};

const deleteFeeById = async(req, res, next ) => {
    try {
        const result = await Fee.deleteOne({ _id: req.params.id });
        if (!result) {
          return res.status(404).json({
            error: "Fee not found",
          });
        }
        res.status(200).json({
          message: "Fee Record Deleted successfully",
          fee: result,
        });
      } catch (err) {
        console.error(err);
        res.status(500).json({
          error: "Internal Server Error",
        });
      }
};



module.exports={
    createFee,
    getAllFee,
    getFeeById,
    updateFeeById,
    deleteFeeById,
};