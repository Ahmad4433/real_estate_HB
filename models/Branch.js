const mongoose = require("mongoose");

const branchSchema = new mongoose.Schema(
  {
    data: { type: Object },
    listing:[{type:mongoose.Types.ObjectId,ref:'Listing'}]
  },
  { timestamps: true }
);

module.exports = mongoose.model("Branch", branchSchema);
