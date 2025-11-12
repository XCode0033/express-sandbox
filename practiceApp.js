const express = require("express");
const app = express();
app.use(express.json()); //parse json bodies

const movieRouter = require("./practiceRoutes/movies");

app.use("/movies", movieRouter);

//fallback for undefined routes
app.use((req, res) => res.status(404).json({ error: "Route not found." }));
app.listen(3010, () => {
  console.log("Server running on port http://localhost:3010");
});

//npx nodemon practiceApp.js
