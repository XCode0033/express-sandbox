//Middleware

// server_practice_X.js — Topic: _____________
// Change the port number per file to avoid conflicts (e.g. 3000, 3001, etc)

const express = require("express");
const app = express();

// Middleware: allows Express to read JSON body data
app.use(express.json());

// 🧠 ROUTES GO BELOW

//EX-1 Global logger
//logs: METHOD PATH DURATIONms
//-res.on("finish") fires after the response goes out

//What it does: for every request, records the start time then logs the HTTP method, URL and how long it took when the response finishes. 
//Purpose: Performance + observability. Lets you spot slow routes and see traffic
app.use((req, res, next) => {
  const t0 = Date.now();
  res.on("finish", () => {
    const ms = Date.now() - t0;
    console.log(`${req.method} ${req.originalUrl} ${ms}ms`);
  });
  next(); //continue to next middleware
})


//EX-2 Request decoration (attach data to req)
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
})

//WID: Adds a requestTime property to req so later routes can use it.
//Purpose:Demonstates that middleware can enrich the request with shared context(timestamps, user correlation IDs, etc)











/////////////////
app.get("/", (req, res) => {
  res.send("Server Practice 4 is running!");
});

// ⚠️ Express 5 — catch-all 404 handler
app.use((req, res) => {
  res.status(404).send("Page not found");
});

// 🟢 Start the server
app.listen(3003, () => {
  console.log("Server Practice 4 running at http://localhost:3003");
});

// npx nodemon server-practice/server_practice_4.js