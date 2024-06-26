const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv").config();

const authRouter = require("../routes/authRouts");
const gameRouter = require("../routes/gameRouts");

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/game", gameRouter);

// app.use((req, res) => {
//   res.status(404).json({ message: "Not founded" });
// });

// app.use((err, req, res, next) => {
//   const { status = 500, message = "Server error" } = err;
//   res.status(status).json({ message });
// });

module.exports = app;
