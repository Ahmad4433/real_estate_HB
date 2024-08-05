const User = require("../../models/User");
const deleteUser = async (req, res, next) => {
  const userId = req.query.id;
  try {
    const admin = await User.findOne({ role: "admin" });

    const deletedUser = await User.findByIdAndDelete(userId);

    if (admin) {
      deletedUser.listing.map((item) => admin.listing.push(item));
      await admin.save();
    }

    res
      .status(200)
      .json({ message: "user deleted successfully", status: true });
  } catch (error) {
    next(error);
  }
};

module.exports = deleteUser;
