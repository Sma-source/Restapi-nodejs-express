import express from "express";
import bodyParse from "body-parser";

const app = express();
const PORT = 5000;

// init body parser
app.use(bodyParser.json());
