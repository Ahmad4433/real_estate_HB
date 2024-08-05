const User = require("../../models/User");

const updateUser = async (req, res, next) => {
  const userId = req.query.id;
  const { data } = req.body;

  try {
    const findedUser = await User.findById(userId);

    findedUser.data = data;

    await findedUser.save();

    res
      .status(200)
      .json({ message: "user updated successfully", status: true,savedUser:findedUser });
  } catch (error) {
    next(error);
  }
};

module.exports = updateUser;
