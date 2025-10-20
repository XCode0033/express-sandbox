const express = require("express");
const app = express();
app.use(express.json());

// 🧠 GOAL: fill in each route below based on the instructions

app.get("/welcome", (req, res) => {
  res.send("Welcome to Express Practice!");
});

app.get("/route", (req, res) => {
  res.json({
    name: "Xavier",
    favoriteLanguage: "JavaScript",
    hobby: "Martial Arts",
  });
});

app.get("/status", (req, res) => {
  res.status(201).send("Everything is working fine!");
});

app.get("/random", (req, res) => {
  const a = Math.floor(Math.random() * 100); // random number 0–99
  const b = Math.floor(Math.random() * 100);
  const difference = Math.abs(a - b); // absolute difference

  res.json({ a, b, difference });
});

app.use((req, res) => {
  res.status(404).send("Page not found - try again!");
});

app.listen(3000, () => {
  console.log("Practice 1 server running at http://localhost:3000");
});

// `app.listen()` actually starts your server and waits for requests.
// The callback runs once to confirm it’s live.
