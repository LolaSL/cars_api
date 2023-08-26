
import mongoose from "mongoose";
const mongoURI = process.env.MONGODB_URI;
const connectDB = async () => {
  try {
    if (mongoose.connection.readyState === 0) {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      await mongoose.connect(mongoURI);
      console.log("db connected");
    }
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;