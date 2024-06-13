const mongoose = require("mongoose");
const conversionSchema = new mongoose.Schema({
  parties: [
    {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
  ],
  message: [{ type: mongoose.Types.ObjectId, ref: "Message" }],
});

module.exports = mongoose.model("Conversion", conversionSchema);
