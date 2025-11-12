const express = require("express");
const router = express.Router();

router.get("/hello", (req, res) => {
  res.json({ message: "Hello from the greetings router!" });
});

router.get("/goodbye", (req, res) => {
  res.json({ message: "Goodbye from the greetings router!" });
});

module.exports = router; //Export so main app can use it
