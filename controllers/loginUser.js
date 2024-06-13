const User = require("../models/User");
const jwt = require("jsonwebtoken");
const loginUser = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const findedUser = await User.findOne({ email: email });

    if (!findedUser) {
      const error = new Error("no user found");
      error.statusCode = 400;
      throw error;
    }

    const accessToken = jwt.sign(
      {
        userId: findedUser._id,
        name: findedUser.name,
      },
      process.env.ACCESS_TOKEN_KEY,
      { expiresIn: "7d" }
    );

    res
      .status(200)
      .json({ message: "success", status: true, access_token: accessToken });
  } catch (error) {
    next(error);
  }
};

module.exports = loginUser;
