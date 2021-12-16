const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  id: { type: Number },
  name: { type: String },
});

const User = mongoose.model("user", userSchema);

module.exports = User;
