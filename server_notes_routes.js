const express = require("express"); //import framework
const app = express(); //create app
app.use(express.json()); //enablel JSON bodies

//app.get() Registers a route that listens for an HTTP GET request.
// "/" The path for that route — / means the home or root URL

//(req, res)
//Express gives your handler two objects:
//• req = the request (everything coming from the client)
//• res = the response (everything going to the client).

//res.send("...")
//Sends plain text or HTML. The browser will just show the text.

//res.json({ ... })
//Sends JSON — structured data (key/value). Usually used when building an API or returning data to JavaScript code instead of a human-facing page.

// GET / -> plain text
app.get("/", (req, res) => {
  //match GET request to "/"

  res.send("Home - server is running"); // send a text response
});

//GET /hello -> JSON
app.get("/hello", (req, res) => {
  //match GET"/hello"
  res.json({ message: "Hello from Express!" }); // send JSON response
});

app.listen(3000, () => {
  // start server
  console.log("http://localhost:3000");
});

//GET / — “If someone visits my home page…”
//→ Send them text: "Home — server is running"

//GET /hello — “If someone visits /hello…”
//→ Send them structured JSON data:

//{ "message": "Hello from Express!" }

//In other words:

//Text/HTML = humans see it

//JSON = programs see it

//Block summary: Two GET routes—one returns text, one returns JSON. Practice the difference between res.send and res.json.

//The client (browser) makes a GET request to the server’s path (/ or /hello).
//Express matches that path, runs your callback, and you decide what to send back with res.send() or res.json().
