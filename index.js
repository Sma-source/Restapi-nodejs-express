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
      questionText: "How many Rings of Power have been forged ?",
      answerOptions: [
        {
          answerText: "1",
          isCorrect: false,
        },
        {
          answerText: "3",
          isCorrect: false,
        },
        {
          answerText: "20",
          isCorrect: false,
        },
        {
          answerText: "9",
          isCorrect: true,
        },
      ],
    });
    res.json(quizz);
  } catch (error) {
    res.status(500).json({
      error: true,
      message: error.message,
    });
  }
});

app.listen(3000, () => console.log("Server Started"));
