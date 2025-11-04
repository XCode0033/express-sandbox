const express = require("express");
const app = express();

// Middleware: allows Express to read JSON body data
app.use(express.json());

// 🧠 ROUTES GO BELOW

app.get("/", (req, res) => {
  res.send("Server Practice 4b is running!");
});

// ⚠️ Express 5 — catch-all 404 handler
app.use((req, res) => {
  res.status(404).send("Page not found");
});

// 🟢 Start the server
app.listen(3038, () => {
  console.log("Server Practice 4b running at http://localhost:3038");
});



// npx nodemon server-practice/server_practice_4b.js