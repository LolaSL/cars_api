import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  fullname: {
    type: String,
    required: [true, "Full name is required."],
    trim: true,
    minLength: [2, "Full name must be larger than 2 characters"],
    maxLength: [50, "Full name must be lesser than 50 characters"],
  },

  email: {
    type: String,
    unique: true,
    required: [true, "Email is required."],
    match: [/^[\w.%+-]+@[\w.-]+\.[A-Za-z]{2,}$/i, "Invalid email address"],
  },

  date: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
