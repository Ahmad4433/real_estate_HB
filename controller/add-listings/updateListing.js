const Listing = require("../../models/Listing");

const updateListing = async (req, res, next) => {
  const { data, galary } = req.body;
  const listingId = req.query.id;

  try {
    const findedListing = await Listing.findById(listingId);
    findedListing.data = data;
    findedListing.galary = [...galary];

    await findedListing.save();

    res
      .status(200).json({ message: "listing updated successfully", status: true });
  } catch (error) {
    next(error);
  }
};

module.exports = updateListing;
