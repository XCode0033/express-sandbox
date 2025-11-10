const express = require("express");
const app = express();

const usersRouter = require("./routes/users"); // <-- import the users router (mini app)
app.use(express.json()); // Parse JSON bodies into req.body
app.use("/users", usersRouter); // Mount: anything starting with /users, //gets handed to userRouter

// GET /users



// GET /users/:id


//POST /users

module.exports = Router;        //export the router to be mounted


app.listen(3011, () => console.log("http://localhost:3011"));