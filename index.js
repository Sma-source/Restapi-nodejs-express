import dotenv from "dotenv";
import express from "express";
import bodyParser from "body-parser";
import moogoose from "mongoose";
import QuizzModel from "./models/QuizzModels.js";

dotenv.config();
const app = express();
moogoose.connect(
  process.env.DATABASE_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Connected");
  }
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post("/", async (req, res, next) => {
  try {
    const quizz = await QuizzModel.create({
      name: req.body.name,
      age: req.body.age,
    });
    res.json(quizz);
  } catch (error) {
    res.status(500).json({
      error: true,
      message: error.message,
    });
  }
});

app.get("/:id", (req, res, next) => {
  try {
    QuizzModel.findById(req.params.id);
    res.json(result);
  } catch (error) {
    res.status(500).json({
      error: true,
      message: error.message,
    });
  }
});

app.listen(3000, () => console.log("Server Started"));
