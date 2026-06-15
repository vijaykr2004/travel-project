const express =
  require("express");

const router =
  express.Router();

const protect =
  require("../middleware/authMiddleware");

const adminOnly =
  require("../middleware/adminMiddleware");

const {
  createInquiry,
  getMyInquiries,
  getAllInquiries,
  updateInquiryStatus,
  deleteInquiry,
  getInquiryStats,
} = require(
  "../controllers/inquiryController"
);


// User
router.post(
  "/",
  protect,
  createInquiry
);

router.get(
  "/my",
  protect,
  getMyInquiries
);


// Admin
router.get(
  "/admin",
  protect,
  adminOnly,
  getAllInquiries
);

router.put(
  "/admin/:id",
  protect,
  adminOnly,
  updateInquiryStatus
);

router.delete(
  "/admin/:id",
  protect,
  adminOnly,
  deleteInquiry
);

router.get(
  "/admin/stats",
  protect,
  adminOnly,
  getInquiryStats
);

module.exports = router;
