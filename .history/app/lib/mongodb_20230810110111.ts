import mongoose from "mongoose";

const mongoUri = mongodb+srv:lolashepota:<03o16u5FpAAf6VnW>@cluster0.qvqh5wa.mongodb.net/contact_db";
  // "mongodb+srv://lolashepota:<03o16u5FpAAf6VnW>@cluster0.qvqh5wa.mongodb.net/contact_db";
let connection: typeof mongoose;

const connectDB = async () => {
  if (!connection) connection =await mongoose.connect(mongoUri)
  return connection;

};

export default connectDB;
