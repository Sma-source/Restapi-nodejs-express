import express from "express";
import { v4 as uuidv4 } from "uuid";

// init router
const router = express.Router();

const users = [];

// all routes in here are starting with /users
router.get("/", (req, res) => {
  res.send(users);
});

// add user via post
router.post("/", (req, res) => {
  const user = req.body;

  // add id to current user
  const userWithId = { ...user, id: uuidv4() };
  users.push(userWithId);

  res.send(`User with the name ${user.firstName} added to the database`);
});

// route user id
router.get("/:id", (req, res) => {
  // const id = req.params.id
  const { id } = req.params;

  const foundUser = users.find((user) => user.id === id);
  res.send(foundUser);
});

// delete user with id
router.delete("/:id", (req, res) => {
  const { id } = req.params;
});

export default router;
