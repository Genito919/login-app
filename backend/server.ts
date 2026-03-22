import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.ts";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);

app.listen(3001, () => {
  console.log("Backend corriendo en http://localhost:3001");
});