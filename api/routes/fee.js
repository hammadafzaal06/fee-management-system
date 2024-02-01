const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
//const path = require('path');

const Fee = require("../models/fee");
const { createFee, getAllFee, getFeeById, updateFeeById, deleteFeeById } = require("../controllers/fee");

router.get("/fee", getAllFee);

router.post("/fee", createFee);

router.get("/fee/:id", getFeeById);

router.patch("/fee/:id", updateFeeById);

router.delete("/fee/:id", deleteFeeById);

module.exports = router;
