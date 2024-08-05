const User = require("../../models/User");
const addUser = async (req, res, next) => {
  const { data } = req.body;

  try {
    const newUser = new User({
      data: data,
    });

    const savedUser = await newUser.save();

    res
      .status(200)
      .json({ message: "user created successfully", status: true, savedUser });
  } catch (error) {
    next(error);
  }
};

module.exports = addUser;
