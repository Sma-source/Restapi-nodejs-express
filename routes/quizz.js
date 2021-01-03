import express from "express";
import {
  getQuizzs,
  getQuizz,
  createQuizz,
  updateQuizz,
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

export default router;
