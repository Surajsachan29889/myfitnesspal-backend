const express = require("express");

const router = express.Router();
const Food = require("../models/food.model");

router.get("", async (req, res) => {
  const food = await Food.find().lean().exec();
  return res.status(200).send({ food });
});

module.exports = router;
