import express from "express";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post("/", (req, res, next) => {
  console.log(req.body);
  res.json({
    test: req.body,
  });
});

app.listen(3000, () => console.log("Server Started"));
