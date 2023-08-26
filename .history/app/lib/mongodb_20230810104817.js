import mongoose from "mongoose";

const MONGO_URI =pro
  // "mongodb+srv://lolashepota:<03o16u5FpAAf6VnW>@cluster0.qvqh5wa.mongodb.net/contact_db";
  
const connectDB = async () => {
  try {
    if (mongoose.connection.readyState === 0) {
      await mongoose.connect( MONGO_URI);
      console.log("db connected");
    }
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
