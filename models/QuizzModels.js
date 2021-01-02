import mongoose from "mongoose";

const quizzSchema = new mongoose.Schema([
  {
    name: String,
    age: Number,
  },
]);

const QuizzModel = mongoose.model("Quizz", quizzSchema);

export default QuizzModel;
