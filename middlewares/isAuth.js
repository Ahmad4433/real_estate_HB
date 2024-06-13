const jwt = require("jsonwebtoken");

const isAuth = (req, res, next) => {
  try {
    const header = req.get("Authorization");
    if (!header) {
      const error = new Error("No authorization header provided");
      error.statusCode = 400;
      throw error;
    }

    const token = header.split(" ")[1];
    if (!token) {
      const error = new Error("Token not found");
      error.statusCode = 401;
      throw error;
    }

    jwt.verify(token, process.env.ACCESS_TOKEN_KEY, (err, decoded) => {
      if (err) {
        const error = new Error("Invalid token");
        error.statusCode = 401;
        throw error;
      } else {
        req.userId = decoded.userId;
        next();
      }
    });
  } catch (error) {
    next(error);
  }
};

module.exports = isAuth;
