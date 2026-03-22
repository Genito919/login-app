import { Router } from "express";
import { pool } from "../db";

const router = Router();

router.post("/login", async (req, res) => {
  try {
    console.log("🔥 NUEVO LOGIN:", req.body); // ← clave

    const { email, password } = req.body;

    await pool.query(
      "INSERT INTO users (email, password) VALUES (?, ?)",
      [email, password]
    );

    res.json({ message: "Datos guardados" });
  } catch (error) {
    console.error("❌ ERROR:", error);
    res.status(500).json({ message: "Error servidor" });
  }
});

export default router;