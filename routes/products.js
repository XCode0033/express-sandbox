const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ products: ["Laptop", "Phone", "Tablet"] });
});

router.get("/:id", (req, res) => {
  res.json({
    productId: req.params.id,
    name: "Sample Product",
  });
});

module.exports = router;
