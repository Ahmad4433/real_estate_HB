const mongoose = require("mongoose");
const messageSchena = new mongoose.Schema(
  {
    sender: { type: mongoose.Types.ObjectId, ref: "User" },
    receiver: { type: mongoose.Types.ObjectId, ref: "User" },
    message: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Message", messageSchena);
