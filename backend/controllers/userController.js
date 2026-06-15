const User = require("../models/User");
const Inquiry = require("../models/Inquiry");
const Payment = require("../models/Payment");
const bcrypt = require("bcryptjs");


// Dashboard Summary
exports.getDashboard = async (
  req,
  res
) => {
  try {
    const totalInquiries =
      await Inquiry.countDocuments({
        user: req.user.id,
      });

    const totalPayments =
      await Payment.countDocuments({
        user: req.user.id,
      });

    const totalSpent =
      await Payment.aggregate([
        {
          $match: {
            user: req.user._id,
            status: "Paid",
          },
        },
        {
          $group: {
            _id: null,
            total: {
              $sum: "$amount",
            },
          },
        },
      ]);

    res.json({
      success: true,
      data: {
        totalInquiries,
        totalPayments,
        totalSpent:
          totalSpent[0]?.total || 0,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// Update Profile
exports.updateProfile =
  async (req, res) => {
    try {
      const user =
        await User.findByIdAndUpdate(
          req.user.id,
          req.body,
          {
            new: true,
          }
        ).select("-password");

      res.json({
        success: true,
        user,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  };


// Change Password
exports.changePassword =
  async (req, res) => {
    try {
      const {
        oldPassword,
        newPassword,
      } = req.body;

      const user =
        await User.findById(
          req.user.id
        );

      const isMatch =
        await bcrypt.compare(
          oldPassword,
          user.password
        );

      if (!isMatch) {
        return res.status(400).json({
          success: false,
          message:
            "Old password incorrect",
        });
      }

      user.password =
        await bcrypt.hash(
          newPassword,
          10
        );

      await user.save();

      res.json({
        success: true,
        message:
          "Password Updated",
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  };