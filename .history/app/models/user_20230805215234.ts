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
const userSchema = new
const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
