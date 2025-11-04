const express = require("express");
const app = express();

// Middleware: allows Express to read JSON body data
app.use(express.json());

// 🧠 ROUTES GO BELOW

app.get("/", (req, res) => {
  res.send("Server Practice 5b is running!");
});


// ⚠️ Express 5 — catch-all 404 handler
app.use((req, res) => {
  res.status(404).send("Page not found");
});

// 🟢 Start the server
app.listen(3034, () => {
  console.log("Server Practice 5b running at http://localhost:3034");
});


// npx nodemon server-practice/server_practice_5.js