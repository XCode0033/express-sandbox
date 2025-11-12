const express = require("express");
<<<<<<< HEAD
const router = express.Router();

// GET /users/:id - Get a specific user

router.get("/:id", (req, res) => {
  const userId = req.params.id;
  res.json({
    message: `Fetching user ${userId}`,
    userId: userId,
  });
});

// GET /users/:id/profile - Get user profile
router.get("/:id/profile", (req, res) => {
  const userId = req.params.id;
  res.json({
    userId: userId,
    profile: {
      bio: "This is my bio",
      joined: "2024-01-01",
    },
  });
});

module.exports = router;
=======
const app = express();

const usersRouter = require("./routes/users"); // <-- import the users router (mini app)
app.use(express.json()); // Parse JSON bodies into req.body
app.use("/users", usersRouter); // Mount: anything starting with /users, //gets handed to userRouter

// GET /users



// GET /users/:id


//POST /users

module.exports = Router;        //export the router to be mounted


app.listen(3011, () => console.log("http://localhost:3011"));
>>>>>>> 9f0e5c399aa7552751df2c84f87716f303eef891
