const express = require("express");
const authMiddleware = require("./middleware/authMiddleware");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config();

const app = express();

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));
app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("GigFlow Backend Running");
});

app.get("/api/protected", authMiddleware, (req, res) => {
  res.json({ message: "Protected route accessed" });
});

const authRoutes = require("./routes/authRoutes");


app.use("/api/auth", authRoutes);


mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");
    app.listen(5000, () => {
      console.log("Server running on port 5000");
    });
  })
  .catch(err => console.log(err));
