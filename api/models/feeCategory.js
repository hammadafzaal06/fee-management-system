const mongoose = require('mongoose')
const feeCategorySchema = mongoose.Schema({
    categoryName: { type: String, required: true },
    description: { type: String },
    // ... other fee category-related fields
  });

  module.exports = mongoose.model('FeeCategory', feeCategorySchema);