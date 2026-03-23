import { Router } from "express";
import { pool } from "../db.js";

const router = Router();

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    await pool.query(
      "INSERT INTO users (email, password) VALUES ($1, $2)",
      [email, password]
    );

    res.json({ message: "Datos guardados en Supabase" });
  } catch (error) {
    console.log("ERROR DB:", error);
    res.status(500).json({ message: "Error DB" });
  }
});

export default router;