import express from "express";
import bodyParser from "body-parser";

const app = express();
const PORT = 5000;

// init body parser
app.use(bodyParser.json());

// make app listen for incoming request
app.listen(PORT, () =>
  console.log(`server running on port: http://localhost:${PORT}`)
);
