const Listing = require("../../models/Listing");

const updateListingActions = async (req, res, next) => {
  const { isHot } = req.body;
  const listingId = req.query.id;

  try {
    const findedItem = await Listing.findById(listingId);
    findedItem.isHot = isHot;
    await findedItem.save();
    res.status(200).json({ message: "hot applied successfully", status: true });
  } catch (error) {
    next(error);
  }
};

module.exports = updateListingActions;
