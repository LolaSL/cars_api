import mongoose, { Document, Schema } from "mongoose";
import bcrypt from 'bcryptjs';

interface UserDocument extends Document{
  email: string;
  
}
const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
