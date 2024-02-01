const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");



const studentRoutes = require("./api/routes/students");
const feeRoutes = require("./api/routes/fee");
const paymentRoutes = require("./api/routes/payments");
const feeCategoryRoutes = require("./api/routes/feeCategorys");

//require("dotenv").config();

mongoose.connect("mongodb://127.0.0.1:27017/newdb");

//app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use("/students", studentRoutes);
app.use("/fee", feeRoutes);
app.use("/payments", paymentRoutes);
app.use("/feeCategorys", feeCategoryRoutes);


app.use((req, res, next) => {
    const error = new Error("Not found");
    error.status = 404;
    next(error);
  });
  
app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
      error: {
        message: error.message,
      },
    });
  });


module.exports= app;