const express = require("express");
const router = express.Router();

// GET /users/:id - Get a specific user

router.get("/:id", (req, res) => {
  const userId = req.params.id;
  res.json({
    message: `Fetching user ${userId}`,
    userId: userId,
  });
});

// GET /users/:id/profile - Get user profile
router.get("/:id/profile", (req, res) => {
  const userId = req.params.id;
  res.json({
    userId: userId,
    profile: {
      bio: "This is my bio",
      joined: "2024-01-01",
    },
  });
});

module.exports = router;
