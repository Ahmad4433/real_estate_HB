const Review = require("../../models/Review");

const addReview = async (req, res, next) => {
  const { data } = req.body;

  try {
    const newReview = new Review({
      data,
    });
    const savedReview = await newReview.save();

    res.status(200).json({
      message: "review added successfully",
      status: true,
      review: savedReview,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = addReview;
