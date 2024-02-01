const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
//const path = require('path');

const FeeCategory = require("../models/feeCategory");
const { createFeeCategory, getAllFeeCategory, getFeeCategoryById, updateFeeCategoryById, deleteFeeCategoryById } = require("../controllers/feeCategorys");

router.get("/feeCategorys", getAllFeeCategory);

router.post("/feeCategorys",createFeeCategory);

router.get("/feeCategorys/:id", getFeeCategoryById);

router.patch("/feeCategorys/:id", updateFeeCategoryById);

router.delete("/feeCategorys/:id", deleteFeeCategoryById);

module.exports = router;
