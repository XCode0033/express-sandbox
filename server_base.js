// 1) Import express (the web framework)
const express = require("express");

// 2) Create an app instance
const app = express();

// 3) Parse JSON bodies into req.body
app.use(express.json());

// 4) Health check route (quick “is server alive?”)
app.get("/health", (req, res) => {
  res.json({ ok: true });
});

// 5) Start listening on port 3000
app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
