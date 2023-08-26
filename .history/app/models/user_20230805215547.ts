import mongoose, { Document, Schema } from "mongoose";
import bcrypt from 'bcryptjs';

interface UserDocument extends Document{
  email: string;
  fullname: string;
  password: string;
  role:"admin"| "user"
}
interface Methods{
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
    // minLength: [4, "Full name must be larger than 4 characters"],
    // maxLength: [30, "Full name must be lesser than 30 characters"],
  },
 password: {
    type: String,
    required: [true, "Full name is required."],
    trim: true,
    // minLength: [4, "Full name must be larger than 4 characters"],
    // maxLength: [30, "Full name must be lesser than 30 characters"],
  },
  role: {
    type: String,
enum:
  },
})
const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
