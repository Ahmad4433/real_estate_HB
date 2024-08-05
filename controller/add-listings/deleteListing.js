const listing = require("../../models/Listing");

const deleteListing = async (req, res, next) => {
  const listingId = req.query.id;

  try {
    await listing.findByIdAndDelete(listingId);

    res
      .status(200)
      .json({ message: "listing deleted successfully", status: true });
  } catch (error) {
    next(error);
  }
};

module.exports = deleteListing;
