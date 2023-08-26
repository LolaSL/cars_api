import mongoose, { Document, Schema } from "mongoose";
import bcrypt from "bcryptjs";

interface UserDocument extends Document {
  email: string;
  fullname: string;
  password: string;
  role: "admin" | "user";
}
interface Methods {
  comparepassword(password: string): Promise<boolean>;
}
const userSchema = new Schema<UserDocument, {}, Methods>({
  email: {
    type: String,
    required: [true, "Email is required."],
    match: [/^[\w.%+-]+@[\w.-]+\.[A-Za-z]{2,}$/i, "Invalid email address"],
  },
  fullname: {
    type: String,
    required: [true, "Full name is required."],
    trim: true,
  },
  password: {
    type: String,
    required: [true, "Full name is required."],
    trim: true,
  },
  role: {
    type: String,
    enum: ["admin", "user"],
    default: "user",
  },
});
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  try {
    const salt = await bcrypt.genSalt(13);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    throw error;
  }
});

userSchema.methods.comparePassword = async function (password) {
  
}
const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
