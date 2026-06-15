const express =
  require("express");

const router =
  express.Router();

const protect =
  require("../middleware/authMiddleware");

const adminOnly =
  require("../middleware/adminMiddleware");

const {
  createOrder,
  verifyPayment,
  getMyPayments,
  getAllPayments,
} = require(
  "../controllers/paymentController"
);


// User
router.post(
  "/create-order",
  protect,
  createOrder
);

router.post(
  "/verify",
  protect,
  verifyPayment
);

router.get(
  "/my-payments",
  protect,
  getMyPayments
);


// Admin
router.get(
  "/admin",
  protect,
  adminOnly,
  getAllPayments
);

module.exports = router;