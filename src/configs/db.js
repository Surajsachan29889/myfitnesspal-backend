const mongoose = require("mongoose");

require("dotenv").config();

const connect = () => {
  return mongoose.connect("mongodb+srv://srjsachan:8858856132@portfolioprojects.1mx7zhr.mongodb.net/?retryWrites=true&w=majority");
};

module.exports = connect;
