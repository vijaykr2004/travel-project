const TourPackage = require(
  "../models/TourPackage"
);



// Create Package
exports.createPackage = async (
  req,
  res
) => {
  try {
    const packageData =
      await TourPackage.create(
        req.body
      );

    res.status(201).json({
      success: true,
      packageData,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};



// Get All Packages
exports.getPackages = async (
  req,
  res
) => {
  try {
    const packages =
      await TourPackage.find();

    res.status(200).json({
      success: true,
      count: packages.length,
      packages,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};



// Get Single Package
exports.getPackage = async (
  req,
  res
) => {
  try {
    const packageData =
      await TourPackage.findById(
        req.params.id
      );

    if (!packageData) {
      return res.status(404).json({
        success: false,
        message:
          "Package Not Found",
      });
    }

    res.status(200).json({
      success: true,
      packageData,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};



// Update Package
exports.updatePackage = async (
  req,
  res
) => {
  try {
    const packageData =
      await TourPackage.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new: true,
        }
      );

    if (!packageData) {
      return res.status(404).json({
        success: false,
        message:
          "Package Not Found",
      });
    }

    res.status(200).json({
      success: true,
      packageData,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};



// Delete Package
exports.deletePackage = async (
  req,
  res
) => {
  try {
    const packageData =
      await TourPackage.findById(
        req.params.id
      );

    if (!packageData) {
      return res.status(404).json({
        success: false,
        message:
          "Package Not Found",
      });
    }

    await packageData.deleteOne();

    res.status(200).json({
      success: true,
      message:
        "Package Deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};