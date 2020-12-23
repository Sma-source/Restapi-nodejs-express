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
  console.log(users);
  res.send(users);
});

export default router;
