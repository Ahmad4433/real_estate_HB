const Listing = require("../../models/Listing");

const getAllListing = async (req, res, next) => {
  try {
    const allListing = await Listing.find().populate([
      {
        path: "user",
        select:'data'
      },
    ]);

    res
      .status(200)
      .json({ message: "success", status: true, list: allListing });
  } catch (error) {
    next(error);
  }
};

module.exports = getAllListing;
