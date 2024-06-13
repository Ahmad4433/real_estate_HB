const User = require("../models/User");
const getUsers = async (req, res, next) => {
  try {
    const list = await User.find().sort({ _id: -1 }).select("-password");

    const filteredList = list.filter((item) => {
      return item._id.toString() !== req.userId;
    });

    res
      .status(200)
      .json({ message: "success", status: true, list: filteredList });
  } catch (error) {
    next(error);
  }
};

module.exports = getUsers;
