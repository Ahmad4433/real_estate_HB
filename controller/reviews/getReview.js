const Review = require("../../models/Review");

const getReview = async (req, res, next) => {
  try {
    const list = await Review.find().sort({ _id: -1 });

    res.status(200).json({ message: "success", status: true, list });
  } catch (error) {
    next(error);
  }
};

module.exports = getReview;
