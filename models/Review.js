const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema(
  {
    data: { type: Object },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Review", reviewSchema);
