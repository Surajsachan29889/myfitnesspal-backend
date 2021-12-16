const express = require("express");
const mongoose = require("mongoose");
const connect = require("./configs/db");
const app = express();

//controller import
const userController = require("./controller/user.controller");

//middlewares
app.use(express.json());
app.use("/users", userController);

let port = process.env.PORT;

const start = async () => {
  await connect();
  app.listen(port, () => {
    console.log("listing to port " + port);
  });
};

module.exports = start;
