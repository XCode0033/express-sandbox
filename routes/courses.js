const express = require("express");
const router = express.Router();

//nested routes, create subroutes for complex hierarchies
// GET /courses - All courses
router.get("/", (req, res) => {
  res.json({ courses: ["Math 101", "CS 201"] });
});

//GET /courses/:courseId - Specific course
router.get("/:courseId", (req, res) => {
  res.json({
    courseId: req.params.courseId,
    name: "Sample Course",
  });
});

// GET /courses/:courseId/assigmnents - Course assignments
router.get("/:courseId/assignments", (req, res) => {
  res.json({
    courseId: req.params.courseId,
    assignments: ["Assignment 1", "Assignment 2"],
  });
});

// GET /courses/:courseId/assignments/:assignmentId - Specific Assignment
router.get("/:courseId/assignments/:assignmentId", (req, res) => {
  res.json({
    courseId: req.params.courseId,
    assignmentId: req.params.assignmentId,
    title: req.params.title,
    dueDate: "2025-12-01",
  });
});

module.exports = router;
