import mongoose from "mongoose";

const quizzSchema = new mongoose.Schema({
  questionText: String,
  answerOptions: [
    { answerText: String, isCorrect: Boolean },
    { answerText: String, isCorrect: Boolean },
    { answerText: String, isCorrect: Boolean },
    { answerText: String, isCorrect: Boolean },
  ],
});

const QuizzModel = mongoose.model("Quizz", quizzSchema);

module.exports = QuizzModel;
