import dotenv from "dotenv";
import express from "express";
import bodyParser from "body-parser";
import moogoose from "mongoose";
import HttpError from "./utils/utils.js";
import routes from "./routes/quizz.js";

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

app.use("/quizz", routes);

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
