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


//EX-2 storing info for later, purpose:tagging requests with data the rest of your app can read
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
})


//EX-3 route level guards
//protect certain routes with conditions. Purpose:Restrict access, handle permissions, validate headers'
const checkKey = (req, res, next) => {
  if (req.headers["x-api-key"] === "secret123") return next();
  res.status(403).send("Forbidden");
};

app.post("/secure", checkKey, (req, res) => {
  res.send("Access granted!");
});
//purpose: restrict access, handle permissions, validate headers

//EX-4 Validation Middleware, check that required data exists.
const validateTask = (req, res, next) => {
  const { name, priority } = req.body;
  if(!name || !priority)
    return res.status(400).json({ error:"Missing fields"});
  next()
}



app.post("/task", validateTask, req, res => {
  res.json({ok:true});
})

//purpose: ensures the oroutes only proccess valid data








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