const Review = require("../../models/Review");

const deleteReview = async (req, res, next) => {
  const reviewId = req.query.id;
  try {
    await Review.findByIdAndDelete(reviewId);

    res
      .status(200)
      .json({ message: "review deleted successfully", status: true });
  } catch (error) {
    next(error);
  }
};

module.exports = deleteReview;
