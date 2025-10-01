require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;
const MONGODB_URL = process.env.MONGODB_URL || "mongodb://mongo:27017/test-db";

app.get("/", (req, res) => {
  res.status(200).json({ message: "Legacy app running!" });
});

mongoose
  .connect(MONGODB_URL)
  .then(() => app.listen(PORT, () => console.log(`Server on port ${PORT}`)))
  .catch((err) => console.error("MongoDB connection error:", err));
