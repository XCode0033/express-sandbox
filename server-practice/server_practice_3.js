//POST requests

// server_practice_X.js — Topic: _____________
// Change the port number per file to avoid conflicts (e.g. 3000, 3001, etc)

const express = require("express");
const app = express();

// Middleware: allows Express to read JSON body data
  app.use(express.json());
// 🧠 ROUTES GO BELOW

app.post("/hello", (req, res) => {
  const { name } = req.body;
  res.send(`Welcome, ${name}!`);
})



app.post("/check", (req, res) => {
  const { age } = req.body;
  
  if(age >= 18) {
    res.send(`age:${age}, you're an adult`);
    
  }else {
    res.send(`age:${age} you're a minor`);
    
  }
  
})

app.post("/task", (req, res) => {
  const {title, priority} = req.body;
  res.json ({
    message: `Task '${title}' added!`,
    priority: priority,
  });
});

app.post("/groceryList", (req, res) => {
  const { item, quantity} = req.body;
  res.json ({
    message: `Item: ${item}, Quantity: ${quantity}`
  })
});


app.post('/feedback', (req, res) => {
  const { user, userResponse} = req.body;
  res.json ({
    recieved: true,
    user,
    message: `${userResponse} -${user}`
  })
})





app.get("/", (req, res) => {
  res.send("Server Practice 3 is running!");
});




// ⚠️ Express 5 — catch-all 404 handler
app.use((req, res) => {
  res.status(404).send("Page not found");
});

// 🟢 Start the server
app.listen(3002, () => {
  console.log("Server Practice 3 running at http://localhost:3002");
});
