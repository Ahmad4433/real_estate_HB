const Listing = require("../../models/Listing");

const getSingleListingById = async (req, res, next) => {
  const listingId = req.query.id;
  try {
    const listing = await Listing.findById(listingId).populate([
      {
        path: "user",
        select: "data",
      },
    ]);

    res.status(200).json({ message: "success", status: true, list: listing });
  } catch (error) {
    next(error);
  }
};

module.exports = getSingleListingById;
