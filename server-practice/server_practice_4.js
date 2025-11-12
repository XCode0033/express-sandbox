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

//realworld use: "how many people added tasks today? or which one are slow?"

//EX-2 storing info for later, purpose:tagging requests with data the rest of your app can read
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
})

//realworld use: it can attach new data to req before it reaches the final route
//store req.userID after verifiying a token
//record req.devideType from headers
//add req.requestTime for analytics
//Store req.origin to track where requests come from


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
//real world: /admin/deleteUser is only accessible if req.user.role == 'admin'
// /api/private-data blocked unless token is valid


//purpose: ensures the oroutes only proccess valid data
//backends version of front ends form submission, essentially double checks
//for this example, verify that "priority" is on of ["high", "medium", "low"]




//MORE examples
// ex 1
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
})
//logs every request
//runs before any routes, doesn't stop the request, only records info and calls next()


//ex 2
//add timestamp decorator
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
})
//purpose: attaches a time tag to each request
//stores metadata that any route can use later, for example, 
app.get("/info", (req, res) => res.send(req.requestTime));


//example 3, API key guard 

const requireKey = (req, res, next) => {
  if (req.headers["x-api-key"] === "secret123") next();
  else res.status(403).send("Access denied");
}


app.get("/secure", requireKey, (req, res) => {
  res.send("Welcome authorized user!");
});
//blocks request that do't include the correct header key.
//runs before the route logic, decides if it's allowed to continue


//Validator Middleware

const validateTask = (req, res, next) => {
  if (!req.body.task) return res.status(400).send("Missing task field");
  next();
}

app.post("/task", validateTask, (req, res) => {
  res.send(`Task '${req.body.task} recieved.`);
});

//Error Handler

app.use((err, req, res, next) => {
  console.error("ERROR", err.message);
  res.status(500).json({error: err.message});
})


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



//more examples
// npx nodemon server-practice/server_practice_4b.js




//🧠 Core Principles to Remember

//Middleware runs in order — write them from general → specific → fallback.

//Every middleware must end in either res.send() / res.json() or next().

//If you send a response, the chain stops.

//404 handler should be after all routes.

//Error handler must be last and have 4 parameters (err, req, res, next).



//How Middleware Maps to the Real World
//Middleware Type	Real-World Analogy	Example in SharpSchedule
//Built-in (JSON)	Translator	Converts incoming data to readable format
//Logger	Security camera	Tracks user activity and route performance
//Decorator	Passport stamp	Tags each request with user/time info
//Guard	Security gate	Blocks unverified users from protected pages
//Validator	Quality control	Stops incomplete tasks from being saved
//Error Handler	Emergency response team	Handles crashes and keeps the app alive