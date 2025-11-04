const express = require("express");
const app = express();

// Middleware: allows Express to read JSON body data
app.use(express.json());

// 🧠 ROUTES GO BELOW

app.get("/", (req, res) => {
  res.send("Server Practice 5 is running!");
});

// ⚠️ Express 5 — catch-all 404 handler
app.use((req, res) => {
  res.status(404).send("Page not found");
});

// 🟢 Start the server
app.listen(3007, () => {
  console.log("Server Practice 7b running at http://localhost:3007");
});



// npx nodemon server-practice/server_practice_7b.js