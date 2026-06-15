const Inquiry = require("../models/Inquiry");


// Create Inquiry
exports.createInquiry = async (req, res) => {
  try {
    const inquiry = await Inquiry.create({
      user: req.user.id,
      fullName: req.body.fullName,
      email: req.body.email,
      mobile: req.body.mobile,
      destination: req.body.destination,
      travelDate: req.body.travelDate,
      travelers: req.body.travelers,
      message: req.body.message,
    });

    res.status(201).json({
      success: true,
      message: "Inquiry Submitted Successfully",
      inquiry,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};



// User Inquiries
exports.getMyInquiries = async (
  req,
  res
) => {
  try {
    const inquiries =
      await Inquiry.find({
        user: req.user.id,
      }).sort({
        createdAt: -1,
      });

    res.status(200).json({
      success: true,
      count: inquiries.length,
      inquiries,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};



// Admin All Inquiries
exports.getAllInquiries = async (
  req,
  res
) => {
  try {
    const inquiries =
      await Inquiry.find()
        .populate(
          "user",
          "name email"
        )
        .sort({
          createdAt: -1,
        });

    res.status(200).json({
      success: true,
      count: inquiries.length,
      inquiries,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};



// Update Status
exports.updateInquiryStatus =
  async (req, res) => {
    try {
      const inquiry =
        await Inquiry.findById(
          req.params.id
        );

      if (!inquiry) {
        return res.status(404).json({
          success: false,
          message:
            "Inquiry Not Found",
        });
      }

      inquiry.status =
        req.body.status;

      await inquiry.save();

      res.status(200).json({
        success: true,
        message:
          "Status Updated Successfully",
        inquiry,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  };



// Delete Inquiry
exports.deleteInquiry = async (
  req,
  res
) => {
  try {
    const inquiry =
      await Inquiry.findById(
        req.params.id
      );

    if (!inquiry) {
      return res.status(404).json({
        success: false,
        message:
          "Inquiry Not Found",
      });
    }

    await inquiry.deleteOne();

    res.status(200).json({
      success: true,
      message:
        "Inquiry Deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};



// Dashboard Stats
exports.getInquiryStats =
  async (req, res) => {
    try {
      const total =
        await Inquiry.countDocuments();

      const pending =
        await Inquiry.countDocuments({
          status: "Pending",
        });

      const contacted =
        await Inquiry.countDocuments({
          status: "Contacted",
        });

      const confirmed =
        await Inquiry.countDocuments({
          status: "Confirmed",
        });

      const cancelled =
        await Inquiry.countDocuments({
          status: "Cancelled",
        });

      res.status(200).json({
        success: true,
        stats: {
          total,
          pending,
          contacted,
          confirmed,
          cancelled,
        },
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  };