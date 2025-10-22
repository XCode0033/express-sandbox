//Route Params

/*
🧠 TOPIC: Route parameters
- Express lets you capture parts of a URL using ":".
  Example: app.get("/hello/:name", ...)
  If someone visits /hello/Xavier → req.params.name === "Xavier"
*/

const express = require("express");
const app = express();

// Middleware: allows Express to read JSON body data
app.use(express.json());

// 🧠 ROUTES GO BELOW
//#1
app.get("/hello/:name", (req, res) => {
  const name = req.params.name; //Extracts "name" from the URL
  res.send(`Hello ${name}!`);
});

//#2
// 2️⃣ /square/:number
// Example: /square/9  →  { "number": 9, "square": 81 }
// ⚠️ res.json() uses parentheses + braces → res.json({ key: value })

app.get("/square/:number", (req, res) => {
  const num = parseInt(req.params.number);
  const square = num * num;
  res.json({ number: num, square });
});

// 3️⃣ /repeat/:word/:count
// Example: /repeat/hi/3  →  "hi hi hi"
// Uses Array(count).fill(word).join(" ") to repeat text

app.get("/repeat/:word/:count", (req, res) => {
  const { word, count } = req.params;
  const repeated = Array(parseInt(count)).fill(word).join(" ");
  res.send(repeated);
});

// 4️⃣ /combine/:first/:second
// Example: /combine/fast/car  →  "Combined words: fastcar"
app.get("/combine/:first/:second", (req, res) => {
  const { first, second } = req.params;
  res.send(`Combined words: ${first}${second}`);
});

// 5️⃣ /userinfo/:name/:age/:city
// Example: /userinfo/Xavier/22/Cleveland  →  { "name": "Xavier", "age": 22, "city": "Cleveland" }

app.get("/info/:name/:age/:city", (req, res) => {
  const { name, age, city } = req.params;
  res.send(
    `Hello! Your name is ${name}, your age is ${age}, your city is ${city}!`
  );
});

app.get("/", (req, res) => {
  res.send("Server Practice 2 is running!");
});

// ⚠️ Express 5 — catch-all 404 handler
app.use((req, res) => {
  res.status(404).send("Page not found");
});

// 🟢 Start the server
app.listen(3001, () => {
  console.log("Server Practice 2 running at http://localhost:3001");
});
