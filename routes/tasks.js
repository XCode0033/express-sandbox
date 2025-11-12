const express = require("express");
const router = express.Router();

//Middleware that only runs for THIS router
router.use((req, res, next) => {
  console.log("Tasks router accessed at:", new Date().toISOString());
  next(); //Must call next() to continue;
});

//GET all tasks
router.get("/", (req, res) => {
  res.json({ tasks: ["Task 1", "Task 2", "Task 3"] });
});

//POST new task
router.post("/", (req, res) => {
  const newTask = req.body.task;
  res.status(201).json({
    message: "Task Created",
    task: newTask,
  });
});

module.exports = router; //Export so main app can use it
