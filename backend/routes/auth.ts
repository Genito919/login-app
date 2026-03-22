import { Router } from "express";
import { pool } from "../db.ts";

const router = Router();

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    await pool.query(
      "INSERT INTO users (email, password) VALUES (?, ?)",
      [email, password]
    );

    res.json({ message: "Datos guardados" });
  } catch (error) {
    console.log("ERROR DB:", error);
    res.json({ message: "ok (sin DB)" }); // 🔥 no rompe
  }
});

export default router;