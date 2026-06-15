const express = require(
  "express"
);

const router =
  express.Router();

const {
  createPackage,
  getPackages,
  getPackage,
  updatePackage,
  deletePackage,
} = require(
  "../controllers/packageController"
);

const protect = require(
  "../middleware/authMiddleware"
);

const adminOnly = require(
  "../middleware/adminMiddleware"
);


// Public
router.get("/", getPackages);

router.get(
  "/:id",
  getPackage
);


// Admin Only
router.post(
  "/",
  protect,
  adminOnly,
  createPackage
);

router.put(
  "/:id",
  protect,
  adminOnly,
  updatePackage
);

router.delete(
  "/:id",
  protect,
  adminOnly,
  deletePackage
);

module.exports = router;
