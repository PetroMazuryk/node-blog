import express from "express";
import jwt from "jsonwebtoken";
import "dotenv/config";
import { validationResult } from "express-validator";

import { registerValidation } from "./validations/auth.js";

export const app = express();
app.use(express.json());

// app.get("/", (req, res) => {
//   res.send("Hello World !");
// });

app.post("/auth/register", registerValidation, (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json(errors.array());
  }

  res.json({
    success: true,
  });
});
