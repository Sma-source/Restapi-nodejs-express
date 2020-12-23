import express from "express";
import bodyParser from "body-parser";

import usersRoutes from "./routes/users.js";

const app = express();
const PORT = 5000;

// init body parser
app.use(bodyParser.json());

// specify path and what router to use
app.use("/users", usersRoutes);

// create first route
app.get("/", (req, res) => res.send("Hello from home page"));

// make app listen for incoming request
app.listen(PORT, () =>
  console.log(`server running on port: http://localhost:${PORT}`)
);
