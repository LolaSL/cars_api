
import mongoose from "mongoose";
const mongoURI = process.env.MONGODB_URI;
const connectDB = async () => {
  try {
    if (mongoose.connection.readyState === 0) {
      await  useNewUrlParser: true,
      useUnifiedTopology: true,
     mongoose.connect(mongoURI);
      console.log("db connected");
    }
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;