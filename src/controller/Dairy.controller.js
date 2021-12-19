const express = require("express");
const Dairy = require("../models/dairy.model");

const router = express.Router();

router.post("", async (req, res) => {
  const item = await Dairy.create(req.body);
  return res.status(201).send(item);
});

module.exports = router;
