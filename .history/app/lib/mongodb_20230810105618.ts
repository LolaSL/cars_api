import mongoose from "mongoose";

const mongoUri = process.env.MONGO_URI as string;
  // "mongodb+srv://lolashepota:<03o16u5FpAAf6VnW>@cluster0.qvqh5wa.mongodb.net/contact_db";
let connection: typeof mongoose;

const connectDB = async () => {
  // try {
  //   if (mongoose.connection.readyState === 0) {
  //     await mongoose.connect( mongoUri);
  //     console.log("db connected");
  //   }
  // } catch (error) {
  //   console.log(error);
  // }
};

export default connectDB;
