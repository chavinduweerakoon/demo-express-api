const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

//get
router.get("/", (req, res) => {
  res.send("we are on posts");
});

//post
router.post("/", (req, res) => {
  console.log(req.body);
});

module.exports = router;
