const User = require("../models/User");
const Inquiry = require("../models/Inquiry");
const Payment = require("../models/Payment");
const TourPackage = require(
  "../models/TourPackage"
);


// Dashboard Analytics
exports.getAdminDashboard =
  async (req, res) => {
    try {
      const totalUsers =
        await User.countDocuments();

      const totalPackages =
        await TourPackage.countDocuments();

      const totalInquiries =
        await Inquiry.countDocuments();

      const totalRevenue =
        await Payment.aggregate([
          {
            $match: {
              status: "Paid",
            },
          },
          {
            $group: {
              _id: null,
              revenue: {
                $sum: "$amount",
              },
            },
          },
        ]);

      res.json({
        success: true,
        analytics: {
          totalUsers,
          totalPackages,
          totalInquiries,
          totalRevenue:
            totalRevenue[0]
              ?.revenue || 0,
        },
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  };


// Get Users
exports.getUsers = async (
  req,
  res
) => {
  try {
    const users =
      await User.find().select(
        "-password"
      );

    res.json({
      success: true,
      count: users.length,
      users,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// Get Single User
exports.getUser = async (
  req,
  res
) => {
  try {
    const user =
      await User.findById(
        req.params.id
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


// Delete User
exports.deleteUser =
  async (req, res) => {
    try {
      const user =
        await User.findById(
          req.params.id
        );

      if (!user) {
        return res.status(404).json({
          success: false,
          message:
            "User Not Found",
        });
      }

      await user.deleteOne();

      res.json({
        success: true,
        message:
          "User Deleted",
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  };


// Revenue Analytics
exports.revenueAnalytics =
  async (req, res) => {
    try {
      const revenue =
        await Payment.aggregate([
          {
            $match: {
              status: "Paid",
            },
          },
          {
            $group: {
              _id: null,
              totalRevenue: {
                $sum: "$amount",
              },
            },
          },
        ]);

      res.json({
        success: true,
        revenue:
          revenue[0]
            ?.totalRevenue || 0,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  };