const express = require("express");

const router = express.Router();
const Food = require("../models/food.model");

router.get("", async (req, res) => {
  const food = await Food.find().lean().exec();
  return res.status(200).send({ food });
});

router.get("/search", (req, res) => {
  let regex = new RegExp(req.query.q, "i");
  Food.find({ comment: regex })
    .limit(20)
    .then((result) => {
      return res.status(200).json(result);
    });
});

module.exports = router;
