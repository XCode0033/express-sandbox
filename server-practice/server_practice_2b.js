// Change the port number per file to avoid conflicts (e.g. 3000, 3001, etc)

const express = require("express");
const app = express();

// Middleware: allows Express to read JSON body data
app.use(express.json());

// 🧠 ROUTES GO BELOW

app.get("/greet/:name/:time", (req, res) => {
  const { name, time } = req.params;
  res.send(`Hello!, your name is ${name} and the time is ${time}`);
});

app.get("/intro/:name/:age", (req, res) => {
  const { name, age } = req.params;
  res.json({
    message: `Hi, my name is Xavier, and I am 22, years old!`,
  });
});
app.get("/", (req, res) => {
  res.send("Server Practice 2b is running!");
});

app.get("/color/:favorite", (req, res) => {
  const { favorite } = req.params;
  res.send(`Your favorite color is ${favorite}`);
});

app.get("/sentence/:word1/:word2/:word3", (req, res) => {
  const { word1, word2, word3 } = req.params;
  res.send(`${word1} ${word2} ${word3}!`);
});

// ⚠️ Express 5 — catch-all 404 handler
app.use((req, res) => {
  res.status(404).send("Page not found");
});

// 🟢 Start the server
app.listen(3021, () => {
  console.log("Server Practice 2b running at http://localhost:3021");
});
