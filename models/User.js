const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    // profile:{Type:String},
    // name: { type: String },
    // mobile: { type: Number },
    // whats_app: { type: Number },
    // email: { type: String },
    data: { type: Object },
    role: { type: String, default: "agent" },
    listing: [{ type: mongoose.Types.ObjectId, ref: "Listing" }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
