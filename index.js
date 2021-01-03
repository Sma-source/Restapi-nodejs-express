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
    const quizz = await QuizzModel.create(req.body);
    res.json(quizz);
  } catch (error) {
    res.status(500).json({
      error: true,
      message: error.message,
    });
  }
});
app.get("/", async (req, res, next) => {
  try {
    const all = await QuizzModel.find();
    res.json(all);
  } catch (error) {
    res.status(500).json({
      error: true,
      message: error.message,
    });
  }
});
app.get("/:id", async (req, res, next) => {
  try {
    const result = await QuizzModel.findById(req.params.id);
    res.json(result);
    if (!result) {
      return res.status(404).json({
        error: true,
        message: "User not found",
      });
    }
  } catch (error) {
    res.status(500).json({
      error: true,
      message: error.message,
    });
  }
});

app.listen(3000, () => console.log("Server Started"));
