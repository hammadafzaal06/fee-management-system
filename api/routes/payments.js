const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
//const path = require('path');

const Payment = require("../models/payment");
const { createPayment, getAllPayments, getPaymentById, updatePaymentById, deletePaymentById } = require("../controllers/payments");

router.get("/payments", getAllPayments);

router.post("/payments", createPayment);

router.get("/payments/:id ",getPaymentById);

router.patch("/payments/:id", updatePaymentById);

router.delete("/payments/:id", deletePaymentById);

module.exports = router;
