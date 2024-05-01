import express from "express";
import jwt from "jsonwebtoken";
import "dotenv/config";

// import mongoose from "mongoose";
// const { DB_HOST, PORT } = process.env;
// mongoose
//   .connect(DB_HOST)
//   .then(() => console.log("DB OK"))
//   .catch((err) => console.log("DB err", err));

export const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World !");
});

app.post("/auth/login", (req, res) => {
  console.log(req.body);

  const token = jwt.sign(
    {
      email: req.body.email,
      fullName: "Petro Mazuryk",
    },
    "secret123"
  );

  res.json({
    success: true,
    token,
  });
});

// app.listen(4444, (err) => {
//   if (err) {
//     return console.log(err);
//   }
//   console.log("Server OK");
// });
