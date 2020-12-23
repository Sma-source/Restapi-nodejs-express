import express from "express";

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
  console.log("Post route reached");

  const user = req.body;

  users.push(user);

  res.send(`User with the name ${user.firstName} added to the database`);
});

export default router;
