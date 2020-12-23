import express from "express";

import {
  createUser,
  getUsers,
  getUser,
  removeUser,
  updateUser,
} from "../controllers/users.js";

// init router
const router = express.Router();

// all routes in here are starting with /users

router.get("/", getUsers);

router.post("/", createUser);

// route user id
router.get("/:id", getUser);

// delete user with id
router.delete("/:id", removeUser);

// update user
router.patch("/:id", updateUser);

export default router;
