import express from "express";
import { getQuizzs, getQuizz, createQuizz } from "../controllers/quizz.js";

// init router
const router = express.Router();

router.get("/", getQuizzs);

router.post("/", createQuizz);

// route user id
router.get("/:id", getQuizz);

export default router;
