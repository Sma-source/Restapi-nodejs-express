import mongoose from "mongoose";

const subSchema = new mongoose.Schema({
  answer: {
    type: String,
  },
  isCorrect: {
    type: Boolean,
  },
});

const quizzSchema = new mongoose.Schema({
  question: {
    type: String,
  },
  options: [subSchema],
});

const QuizzModel = mongoose.model("Quizz", quizzSchema);

export default QuizzModel;
