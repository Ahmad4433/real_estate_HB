const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    name: { type: String },
    email: { type: String },
    password: { type: String },
    conversion: { type: mongoose.Types.ObjectId, ref: "Conversion" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
