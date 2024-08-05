const User = require("../../models/User");

const getUsers = async (req, res, next) => {
  try {
    const userList = await User.find();

    const formatedList = userList.map((item) => {
      return { ...item._doc };
    });



    res
      .status(200)
      .json({ message: "success", status: true, list: formatedList });
  } catch (error) {
    next(error);
  }
};

module.exports = getUsers;
