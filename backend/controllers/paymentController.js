const crypto = require("crypto");
const Payment = require("../models/Payment");
const razorpay = require("../config/razorpay");


// Create Order
exports.createOrder = async (
  req,
  res
) => {
  try {
    const { amount } = req.body;

    const options = {
      amount: amount * 100,
      currency: "INR",
      receipt: `receipt_${Date.now()}`,
    };

    const order =
      await razorpay.orders.create(
        options
      );

    res.status(200).json({
      success: true,
      order,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};



// Verify Payment
exports.verifyPayment =
  async (req, res) => {
    try {
      const {
        razorpay_order_id,
        razorpay_payment_id,
        razorpay_signature,
        amount,
        packageId,
      } = req.body;

      const generatedSignature =
        crypto
          .createHmac(
            "sha256",
            process.env
              .RAZORPAY_SECRET
          )
          .update(
            razorpay_order_id +
              "|" +
              razorpay_payment_id
          )
          .digest("hex");

      if (
        generatedSignature !==
        razorpay_signature
      ) {
        return res.status(400).json({
          success: false,
          message:
            "Payment Verification Failed",
        });
      }

      const payment =
        await Payment.create({
          user: req.user.id,
          packageId,
          amount,
          razorpayOrderId:
            razorpay_order_id,
          razorpayPaymentId:
            razorpay_payment_id,
          razorpaySignature:
            razorpay_signature,
          status: "Paid",
        });

      res.status(200).json({
        success: true,
        message:
          "Payment Successful",
        payment,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  };



// User Payment History
exports.getMyPayments =
  async (req, res) => {
    try {
      const payments =
        await Payment.find({
          user: req.user.id,
        })
          .populate(
            "packageId",
            "title destination"
          )
          .sort({
            createdAt: -1,
          });

      res.status(200).json({
        success: true,
        count: payments.length,
        payments,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  };



// Admin Payments
exports.getAllPayments =
  async (req, res) => {
    try {
      const payments =
        await Payment.find()
          .populate(
            "user",
            "name email"
          )
          .populate(
            "packageId",
            "title destination"
          )
          .sort({
            createdAt: -1,
          });

      res.status(200).json({
        success: true,
        count: payments.length,
        payments,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  };