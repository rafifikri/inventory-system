import express from "express";
import { db } from "../db/index.js";
import { users } from "../db/schema.js";

const router = express.Router();

// GET all users
router.get("/", async (req, res) => {
  const allUsers = await db.select().from(users);
  res.json(allUsers);
});

// POST new user
router.post("/", async (req, res) => {
  const { name, email } = req.body;
  const inserted = await db.insert(users).values({ name, email }).returning();
  res.status(201).json(inserted[0]);
});

export default router;
