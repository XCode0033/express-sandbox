const express = require("express");
const app = express();

const usersRouter = require("./routes/users"); // <-- import the users router (mini app)
app.use(express.json()); // Parse JSON bodies into req.body
app.use("/users", usersRouter); // Mount: anything starting with /users, //gets handed to userRouter



app.listen(3011, () => console.log("http://localhost:3011"));