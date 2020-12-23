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
  res.send("THE GET ID ROUTE");
});

export default router;
