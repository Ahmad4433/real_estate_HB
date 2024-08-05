const User = require("../../models/User");

const userName = async (req, res, next) => {
  try {
    const nameList = await User.find().select("data.user_name");
   

    res.status(200).json({ message: "success", status: true, list: nameList });
  } catch (error) {
    next(error);
  }
};

module.exports = userName;
