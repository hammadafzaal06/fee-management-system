const mongoose = require('mongoose')
const paymentSchema = mongoose.Schema({
    student: { type: mongoose.Schema.Types.ObjectId, ref: 'Student', required: true },
    fee: { type: mongoose.Schema.Types.ObjectId, ref: 'Fee', required: true },
    paymentDate: { type: Date, default: Date.now()},
    amount: { type: Number, required: true },
    paymentMethod: { type: String, required: true },
    // ... other payment-related fields
  });

  module.exports = mongoose.model('Payment', paymentSchema);
