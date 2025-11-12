const express = require("express");
const app = express();
app.use(express.json()); //parse json bodies
//Import the router
const greetingsRouter = require("./routes/greetings");
const usersRouter = require("./routes/users");
const tasksRouter = require("./routes/tasks");
const productsRouter = require("./routes/products");
const ordersRouter = require("./routes/orders");
const coursesRouter = require("./routes/courses");
//Mount the router at /greetings
//Now all routes in greetingsRouter are prefixed with /greetings

app.use("/greetings", greetingsRouter);
app.use("/users", usersRouter);
app.use("/tasks", tasksRouter);
app.use("/products", productsRouter);
app.use("/orders", ordersRouter);
app.use("/courses", coursesRouter);
//fallback for undefined routes

app.use((req, res) => [res.status(404).json({ error: "Route not found." })]);
app.listen(3000, () => {
  console.log("Server running on port http://localhost:3000");
});

//node app.js
