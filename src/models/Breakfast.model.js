const mongoose = require("mongoose");

const breakfastSchema = new mongoose.Schema({
  userId: { type: String },
  foodId: { type: String },
});

const Breakfast = mongoose.model("breakfasts", breakfastSchema);

module.exports = Breakfast;
