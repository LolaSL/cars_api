import mongoose, { Document, Schema } from "mongoose";
import bcrypt from 'bcryptjs';


const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
