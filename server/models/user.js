import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      required: true,
      type: String,
      unique: true,
      max: [50, "Username should not exceed 50 characters"],
      min: [3, "Username should be at least 3 characters long"],
      pattern: [
        /^[a-zA-Z0-9]+$/,
        "Username should only contain alphanumeric characters",
      ],
    },
    email: {
      required: true,
      type: String,
      unique: true,
      pattern: [
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        "Please enter a valid email address",
      ],
    },
    password: {
      required: true,
      type: String,
      min: [8, "Password should be at least 8 characters long"],
    },
    martialState: {
      required: true,
      type: Boolean,
    },
    age: {
      required: true,
      type: Number,
    },
  },
  {
    timestamps: true,
  },
);

const User = mongoose.model("User", userSchema);
export default User;
