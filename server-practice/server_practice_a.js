//npx nodemon server-practice/server_practice_a.js

const express = require("express");
const app = express();

// Middleware: allows Express to read JSON body data
app.use(express.json());

// 🧠 ROUTES GO BELOW

//Exercises:
//routes

// app.get("/hello", (req, res) => {
//   res.send(`Hello!`);
// });

// app.get("/about", (req, res) => {
//   res.json({
//     name: "Xavier",
//     hobby: "Martial Arts",
//   });
// });

// app.get("/todaysDate", (req, res) => {
//   res.send(`Today's date: ${new Date().toDateString()}`);
// });

// app.get("/status", (req, res) => {
//   res.status(201).send("Created Succesfully!");
// });

// //Params
// //warmups
// app.get("/hello/:name", (req, res) => {
//   res.send(`Hello, ${req.params.name}`);
// });

// app.get("/square/:num", (req, res) => {
//   const n = Number(req.params.num);
//   res.send(`${n} squared = ${n * n}`);
// });

// app.get("/welcome/:name/:state", (req, res) => {
//   res.send(`Welcome ${req.params.name} from ${req.params.state}!`);
// });

// app.get("/add/:a/:b", (req, res) => {
//   const { a, b } = req.params;
//   res.send(`${a} + ${b} = ${Number(a) + Number(b)}`);
// });

// app.get("/echo/:word", (req, res) => {
//   res.json({ repeated: req.params.word });
// });
// //
// app.get("/", (req, res) => {
//   res.send("Server Practice a is running!");
// });

// //exercises for PARAMS

// app.get("/greet/:user", (req, res) => {
//   res.send(`Hello there ${req.params.user}`);
// });

// app.get("/repeat/:word/:times", (req, res) => {
//   const { word, times } = req.params;
//   res.send(word.repeat(Number(times)));
// });

// //POST
// // app.post("/welcome", (req, res) => {
// //   const { name } = req.body;
// //   res.send(`Welcome, ${name}`);
// // });

// // app.post("/login", (req, res) => {
// //   const { username, password } = req.body;
// //   res.json({ message: `Logged in as ${username}`, success: true });
// // });

// // app.post("/register", (req, res) => {
// //   const { email } = req.body;
// //   res.status(201).json({ message: `Account created for ${email}` });
// // });

// // app.post("/feedback", (req, res) => {
// //   const { user, note } = req.body;
// //   res.send(`Feedback from ${user}: "${note}`);
// // });

// // app.post("/age", (req, res) => {
// //   const { age } = req.body;
// //   if (age >= 18) res.send("Adult");
// //   else if (age <= 17 && age >= 3) res.send("Minor");
// //   else res.send("Infant");
// // });

// //exercises for POST
// //1
// app.post("/greet", (req, res) => {
//   const { name } = req.body;
//   res.send(`Hello ${name}!`);
// });
// //2
// app.post("/task", (req, res) => {
//   const { title } = req.body;
//   res.send(`Task '${title}' added.`);
// });

// //3
// app.post("/profile", (req, res) => {
//   const { username, bio } = req.body;
//   res.json({ message: "Profile Created" });
// });

// //4
// app.post("/feedback", (req, res) => {
//   const { user, rating } = req.body;
//   res.send(`Thanks ${user}, you rated ${rating}!`);
// });

// //5
// app.post("/email", (req, res) => {
//   const { email } = req.body;
//   res.status(201).send(`Email Registered!`);
// });

// //6
// app.post("/note", (req, res) => {
//   const { content } = req.body;
//   res.json({ saved: true, content });
// });

// //7
// app.post("/signup", (req, res) => {
//   const { username, password } = req.body;
//   if (!username || !password) return res.status(400).send("Missing data");
//   res.send(`Signed up as ${username}`);
// })

// //8
// app.post("/login", (req, res) => {
//   const { username, password } = req.body;
//   res.send(`Welcome '${username}!'`);
// });
// //9
// app.post("/verify", (req, res) => {
//   const { code } = req.body;
//   if (code !== 1234) {
//     res.send("Access Denied.");
//   } else {
//     res.send("Access Granted!");
//   }
// });
// //10
// app.post("/contact", (req, res) => {
//   const { name, message } = req.body;
//   res.send(`Message from "${name}": "${message}".`);
// });


//GET again
app.get("/welcome", (req, res) => {
  res.send("Welcome to Express!");
});



app.get("/info", (req, res) => {
  res.json ({name:"Xavier", app:"SharpSchedule"})
})

//Params Again
app.get("/hello/:name", (req, res) => {
  const name = req.params.name;
  res.send(`Hello ${name}!`);
})





app.get("/sum/:a/:b", (req, res) => {
  const {a, b} = req.params;
  res.send(`the answer is ${Number(a) + Number(b)}`);
})


//POST again

app.post("/feedback", (req, res) => {
  const { user, message } = req.body;
  res.send(`Hello ${user}, We've recieved your message!`);
})


app.post("/login", (req, res) => {
  const { username, password} = req.body;
  res.send(`Hello ${username}, your password is ${password}`);
})








app.get("/status", (req, res) => {
  res.status(201).send('Created Successfully!')
} )


// ⚠️ Express 5 — catch-all 404 handler
app.use((req, res) => {
  res.status(404).send("Page not found");
});

// 🟢 Start the server

app.listen(3099, () => {
  console.log("Server Practice a running at http://localhost:3099");
});

