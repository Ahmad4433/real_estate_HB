const mongoose = require("mongoose");

const amenitySchema = new mongoose.Schema({
  title: { type: String },
});

module.exports = mongoose.model("Amenty", amenitySchema);
