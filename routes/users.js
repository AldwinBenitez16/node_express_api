import express from "express";
import { v4 as uuidv4 } from "uuid";

import {
  getUsers,
  createUser,
  getUser,
  deleteUser,
  updateUser,
} from "../controllers/users.js";

const router = express.Router();

let users = [
  {
    firstName: "Johny",
    lastName: "Doe",
    age: 10,
    id: "3a30d723-8a5f-45e4-901b-008f494fe062",
  },
  {
    firstName: "John",
    lastName: "Doe",
    age: 25,
    id: "bb131684-4c23-4a4f-b881-f4f66d36a696",
  },
  {
    firstName: "Jane",
    lastName: "Doe",
    age: 24,
    id: "d8c812a1-a146-4ea0-a3a1-78bcdd7c2aa9",
  },
];

router.get("/", getUsers);

router.post("/", createUser);

router.get("/:id", getUser);

router.delete("/:id", deleteUser);

router.patch("/:id", updateUser);

export default router;
