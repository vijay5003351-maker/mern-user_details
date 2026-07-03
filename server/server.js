import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import User from "./models/user.js";

dotenv.config();
const PORT = process.env.PORT || 3000;
const app = express();
app.use(cors());

app.use(express.json()); // Add this line to parse JSON request bodies

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1);
  }
};

connectDB();

app.post("/api/create-user", async (req, res) => {
  const { username, email, password, martialState, age } = req.body;

  console.log("Received data:", {
    username,
    email,
    password,
    martialState,
    age,
  }); // Log the received data

  // Validate input data
  if (!username || !email || !password || !martialState || !age) {
    return res
      .status(400)
      .json({ success: false, message: "All fields are required" });
  }

  // Further validation can be added here
  const newUser = new User({
    username,
    email,
    password,
    martialState: martialState === "yes" ? true : false,
    age,
  });
  await newUser.save();

  res.status(201).json({
    success: true,
    message: "User created successfully",
    user: newUser,
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
