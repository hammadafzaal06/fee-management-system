const mongoose = require('mongoose')
const feeSchema =mongoose.Schema({
    student: { type: mongoose.Schema.Types.ObjectId, ref: 'Student', required: true },
    feeCategory: { type: mongoose.Schema.Types.ObjectId, ref: 'FeeCategory', required: true },
    amount: { type: Number, required: true },
    dueDate: { type: Date, required: true },
    status: { type: String, enum: ['Paid', 'Unpaid'], default: 'Unpaid' },
    // enum:['PAID', 'UNPAID']
    // ... other fee-related fields
  });

  module.exports = mongoose.model('Fee', feeSchema);