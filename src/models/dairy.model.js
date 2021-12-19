const mongoose = require("mongoose");

const dairySchema = new mongoose.Schema({
  userid: { type: String, required: true, unique: true },
  breakfaset: [{ type: String }],
  lunch: [{ type: String }],
  dinner: [{ type: String }],
  snacks: [{ type: String }],
});

const Dairy = mongoose.model("dairys", dairySchema);

module.exports = Dairy;
