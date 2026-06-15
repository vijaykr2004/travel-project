const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema(
  {
    userId: String,
    amount: Number,
    paymentId: String,
    status: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Payment", paymentSchema);