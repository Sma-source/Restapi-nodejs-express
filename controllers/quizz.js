import QuizzModel from "../models/QuizzModels.js";

// get all questions from the quizz
export const getQuizzs = async (req, res, next) => {
  try {
    const all = await QuizzModel.find();
    res.json(all);
  } catch (error) {
    next(error);
  }
};

// get one question by id
export const getQuizz = async (req, res, next) => {
  try {
    const result = await QuizzModel.findById(req.params.id);

    if (!result) {
      return next(new HttpError(404, "User not found"));
    }
    res.json(result);
  } catch (error) {
    next(error);
  }
};

// post a question

export const createQuizz = async (req, res, next) => {
  try {
    const quizz = await QuizzModel.create(req.body);
    res.json(quizz);
  } catch (error) {
    next(error);
  }
};

// update a question

export const updateQuizz = async (req, res, next) => {
  try {
    const updateQuizz = await QuizzModel.findByIdAndUpdate(
      { _id: req.params.id },
      { question: req.body.question, options: req.body.options },
      { new: true, useFindAndModify: false, upsert: true }
    );

    res.json(updateQuizz);
  } catch (error) {
    next(error);
  }
};
