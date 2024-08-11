const Listing = require("../../models/Listing");

const getFilteredListing = async (req, res, next) => {
  const { filter, isHot } = req.body;

  try {
    let list;

    if (isHot) {
      list = await Listing.find({ ...filter })
        .sort({ _id: -1 })
        .skip(0)
        .limit(2)
        .populate([
          {
            path: "user",
            select: "data",    
          },
        ]);
    } else {
      list = await Listing.find({ ...filter }).populate([
        {
          path: "user",
          select: "data",
        },
      ]);
    }

    res.status(200).json({ message: "success", status: true, list });
  } catch (error) {
    next(error);
  }
};

module.exports = getFilteredListing;
