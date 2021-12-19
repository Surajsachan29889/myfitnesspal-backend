const express = require("express");
const Breakfast = require("../models/Breakfast.model");

const router = express.Router();

router.post("", async (req, res) => {
  const item = await Breakfast.create(req.body);
  return res.status(201).send(item);
});

router.get("", async (req, res) => {
  const user = await Breakfast.find().lean().exec();
  return res.status(200).send({ user });
});

module.exports = router;
