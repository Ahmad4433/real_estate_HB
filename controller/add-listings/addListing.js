const Listing = require("../../models/Listing");
const User = require("../../models/User");
const Branch = require("../../models/Branch");
const addListing = async (req, res, next) => {
  const { data, galary } = req.body;

  try {
    const findedUser = await User.findOne({ "data.user_name": data.user });
    if (!findedUser) {
      const error = new Error("no user found");
      error.statusCode = 404;
      throw error;
    }

    const newListing = new Listing({
      data: data,
      galary: [...galary],
      user: findedUser._id,
    });

    const findedBranch = await Branch.findOne({ "data.branch": data.branch });
    

    const savedListing = await newListing.save();
    findedUser.listing.push(savedListing._id);
    findedBranch.listing.push(savedListing._id);
    await findedBranch.save();
    await findedUser.save();
    res.status(200).json({ message: "success", status: true, savedListing });
  } catch (error) {
    next(error);
  }
};

module.exports = addListing;
