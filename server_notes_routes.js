const express = require("express"); //import framework
const app = express(); //create app
app.use(express.json()); //enablel JSON bodies

// GET / -> plain text
app.get("/", (req, res) => {
  //match(link) GET request to "/"

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
