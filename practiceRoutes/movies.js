const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    list: ["Pacific Rim", "Dr.Strange", "Infinity War"],
  });
});

router.get("/:id", (req, res) => {
  res.json({
    movieId: req.params.id,
    title: "Sample Movie",
  });
});
module.exports = router;
