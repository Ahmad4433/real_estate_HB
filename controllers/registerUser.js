const User = require("../models/User");
const bcrypt = require("bcrypt");
const registerUser = async (req, res, next) => {
  const { name, email, password } = req.body;

  try {
    const findedEmail = await User.findOne({ email: email });
    if (findedEmail) {
      const error = new Error("this email is already in user");
      error.statusCode = 400;
      throw error;
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });

    const savedUser = await newUser.save();

    res.status(200).json({ message: "success", status: true });
  } catch (error) {
    next(error);
  }
};

module.exports = registerUser;
