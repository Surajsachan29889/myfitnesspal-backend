const express = require("express");

const mongoose = require("mongoose");

const connect = require("./configs/db");

const app = express();
app.use(express.json());

let port = process.env.PORT;

const start = async () => {
  await connect();
  app.listen(port, () => {
    console.log("listing to port " + port);
  });
};

module.exports = start;
