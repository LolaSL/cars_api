import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  username: {
    type: String,
    required: [true, "User ame is required."],
    trim: true,
    minLength: [2, "Name must be larger than 2 characters"],
    maxLength: [50, "Name must be lesser than 50 characters"],
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

const User =
  mongoose.models.User || mongoose.model("User", userSchema);

export default User;