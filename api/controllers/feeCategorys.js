const FeeCategory = require("../models/feeCategory");



const createFeeCategory = async(req, res, next) => {
    try {
        const feeCategory = new FeeCategory(req.body);
        const result = await feeCategory.save();
        res.status(201).json({
          message: "Fee Category Created successfully",
          feeCategory: result,
        });
      } catch (err) {
        console.error(err);
        res.status(500).json({
          error: "Internal Server Error",
        });
      }
};

const getAllFeeCategory = async(req, res, next) => {
    try {
        const docs = await FeeCategory.find();
    
        res.status(200).json(docs);
      } catch (err) {
        console.error(err);
        res.status(500).json({
          error: "Internal Server Error",
        });
      }
};

const getFeeCategoryById = async(req, res , next) => {
    try {
        const doc = await FeeCategory.findById(req.params.id);
        if (!doc) {
          return res.status(404).json({
            error: "Fee Category not found",
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

const updateFeeCategoryById = async(req, res, next) => {
    try {
        const result = await FeeCategory.findOneAndUpdate(
          { _id: req.params.id },
          { $set: req.body },
          { new: true }
        );
        if (!result) {
          return res.status(404).json({
            error: "Fee Category not found",
          });
        }
        res.status(200).json({
          message: "Fee Category Updated successfully",
          feeCategory: result,
        });
      } catch (err) {
        console.error(err);
        res.status(500).json({
          error: "Internal Server Error",
        });
      }
};

const deleteFeeCategoryById = async(req, res, next) => {
    try {
        const result = await FeeCategory.deleteOne({ _id: req.params.id });
        if (!result) {
          return res.status(404).json({
            error: "Fee Category not found",
          });
        }
        res.status(200).json({
          message: "Fee Category Deleted successfully",
          feeCategory: result,
        });
      } catch (err) {
        console.error(err);
        res.status(500).json({
          error: "Internal Server Error",
        });
      }
};


module.exports={ 

createFeeCategory,
getAllFeeCategory,
getFeeCategoryById,
updateFeeCategoryById,
deleteFeeCategoryById,

};