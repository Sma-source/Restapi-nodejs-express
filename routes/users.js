import express from "express";
import { v4 as uuidv4 } from "uuid";

// init router
const router = express.Router();

const users = [
  {
    firstName: "John",
    lastName: "Doe",
    age: 29,
  },

  {
    firstName: "Max",
    lastName: "Opera",
    age: 40,
  },
];

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

export default router;
