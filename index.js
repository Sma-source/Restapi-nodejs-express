import dotenv from "dotenv";
import express from "express";
import bodyParser from "body-parser";
import moogoose from "mongoose";
import QuizzModel from "./models/QuizzModels.js";
import HttpError from "./utils/utils.js";
import e from "express";

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
    next(e);
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
      return next(new HttpError(404, "User not found"));
    }
  } catch (error) {
    res.status(500).json({
      error: true,
      message: error.message,
    });
  }
});
app.use((err, req, res, next) => {
  if (err instanceof HttpError) {
    res.status(err.statusCode).json({
      error: true,
      message: err.errMessage,
    });
  } else {
    res.status(500).json({
      error: true,
      message: "Server Error",
    });
  }
});
app.listen(3000, () => console.log("Server Started"));
