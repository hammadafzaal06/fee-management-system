const Payment = require("../models/payment");



const createPayment = async(req, res, next) => {
    try {
        const payment = new Payment(req.body);
        const result = await payment.save();
        res.status(201).json({
          message: "Payment Created successfully",
          payment: result,
        });
      } catch (err) {
        console.error(err);
        res.status(500).json({
          error: "Internal Server Error",
        });
      }
};

const getAllPayments = async(req, res ,next) => {
    try {
        const docs = await Payment.find().populate("student fee");
        res.status(200).json(docs);
      } catch (err) {
        console.error(err);
        res.status(500).json({
          error: "Internal Server Error",
        });
      }
};

const getPaymentById = async(req, res, next) => {
    try {
        const doc = await Payment.findById({ _id: req.params.id }).populate(
          "student fee"
        );
    
        if (!doc) {
          return res.status(404).json({
            error: "Payment not found",
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

const updatePaymentById = async(req, res, next) => {
    try {
        const result = await Payment.findOneAndUpdate(
          { _id: req.params.id },
          { $set: req.body },
          { new: true }
        );
        if (!result) {
          return res.status(404).json({
            error: "Payment not found",
          });
        }
        res.status(200).json({
          message: "Payment Updated successfully",
          payment: result,
        });
      } catch (err) {
        console.error(err);
        res.status(500).json({
          error: "Internal Server Error",
        });
      }
};

const deletePaymentById = async(req, res ,next) => {
    try {
        const result = await Payment.deleteOne({ _id: req.params.id });
        if (!result) {
          return res.status(404).json({
            error: "Payment not found",
          });
        }
        res.status(200).json({
          message: "Payment Deleted successfully",
          payment: result,
        });
      } catch (err) {
        console.error(err);
        res.status(500).json({
          error: "Internal Server Error",
        });
      }
};

module.exports = {
    createPayment,
    getAllPayments,
    getPaymentById,
    updatePaymentById,
    deletePaymentById,
};