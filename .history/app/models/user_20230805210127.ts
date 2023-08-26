import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  fullname: {
    type: String,
    required: [true, "Full name is required."],
    trim: true,
    minLength: [4, "Full name must be larger than 4 characters"],
    maxLength: [30, "Full name must be lesser than 30 characters"],
  },

  email: {
    type: String,
    unique: true,
    required: [true, "Email is required."],
    match: [/^[\w.%+-]+@[\w.-]+\.[A-Za-z]{2,}$/i, "Invalid email address"],
  },
  password: {
    type: String,
    select:false,
    required: [true, "Password is required."],
    }

});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
