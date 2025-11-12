const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    orders: ["Order #1", "Order #2"],
  });
});

router.post("/", (req, res) => {
  res.status(201).json({
    message: "Order created",
    orderId: 12345,
  });
});

module.exports = router;
