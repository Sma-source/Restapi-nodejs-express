import express from "express";
import {
  getQuizzs,
  getQuizz,
  createQuizz,
  updateQuizz,
  removeQuizz,
} from "../controllers/quizz.js";

// init router
const router = express.Router();
// get all quizz
router.get("/", getQuizzs);

// create a quizz
router.post("/", createQuizz);

// route user id
router.get("/:id", getQuizz);

// update quizz

router.put("/:id", updateQuizz);

// remove quizz

router.delete("/:id", removeQuizz);

export default router;
