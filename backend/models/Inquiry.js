const mongoose = require("mongoose");

const inquirySchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    mobile: String,
    destination: String,
    travelDate: String,
    travelers: Number,
    message: String,
    status: {
      type: String,
      default: "Pending",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Inquiry", inquirySchema);