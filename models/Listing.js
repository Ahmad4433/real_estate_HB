const mongoose = require("mongoose");
const listingSchema = new mongoose.Schema(
  {
    data: { type: Object },
    galary: [{ type: String }],
    user: { type: mongoose.Types.ObjectId, ref: "User" },
    isHot: { type: Boolean, default: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Listing", listingSchema);
