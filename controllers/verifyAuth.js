const jwt = require("jsonwebtoken");

const verifyauth = async (req, res, next) => {
  const { token } = req.body;

  try {
    if (!token) {
      const error = new Error("unauthorized");
      error.statusCode = 400;
      throw error;
    }

    jwt.verify(token, process.env.ACCESS_TOKEN_KEY, (error, decoded) => {
      if (error) {
        const error = new Error("unauthorized");
        error.statusCode = 400;
        throw error;
      } else {
        res
          .status(200)
          .json({ message: "success", status: true, user: decoded?.userId });
      }
    });
  } catch (error) {
    next(error);
  }
};

module.exports = verifyauth;
