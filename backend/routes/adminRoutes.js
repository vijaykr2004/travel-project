const express =
  require("express");

const router =
  express.Router();

const protect =
  require("../middleware/authMiddleware");

const adminOnly =
  require("../middleware/adminMiddleware");

const {
  getAdminDashboard,
  getUsers,
  getUser,
  deleteUser,
  revenueAnalytics,
} = require(
  "../controllers/adminController"
);

router.get(
  "/dashboard",
  protect,
  adminOnly,
  getAdminDashboard
);

router.get(
  "/users",
  protect,
  adminOnly,
  getUsers
);

router.get(
  "/users/:id",
  protect,
  adminOnly,
  getUser
);

router.delete(
  "/users/:id",
  protect,
  adminOnly,
  deleteUser
);

router.get(
  "/revenue",
  protect,
  adminOnly,
  revenueAnalytics
);

module.exports = router;