//POST requests

// server_practice_X.js — Topic: _____________
// Change the port number per file to avoid conflicts (e.g. 3000, 3001, etc)

const express = require("express");
const app = express();

// Middleware: allows Express to read JSON body data
  app.use(express.json());
// 🧠 ROUTES GO BELOW

app.post("/login", (req, res) => {
  const {username, password} = req.body;
  res.json ({
    message: `Welcome back, ${username}!, your password is ${password}`, success: true 
  })
})


app.post("/securityQuestions", (req, res) => {
  const { question1, question2} = req.body;
  res.json ({
    message:`What is the security question 1? Answer:${question1}, What is the security question 2? Answer: ${question2}`
  })
})

// ⚠️ Express 5 — catch-all 404 handler
app.use((req, res) => {
  res.status(404).send("Page not found");
});

// 🟢 Start the server
app.listen(3090, () => {
  console.log("Server Practice 3 running at http://localhost:3090");
});
