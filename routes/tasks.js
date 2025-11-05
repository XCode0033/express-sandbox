const express = require("express");
const app = express();

const usersRouter = require("./routes/users"); // <-- import
app.use(express.json());
app.use("/users", usersRouter); // <-- mount



app.listen(3000, () => console.log("http://localhost:3000"));