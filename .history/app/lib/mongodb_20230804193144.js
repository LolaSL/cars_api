
import mongoose from "mongoose";
const mongoURI = process.env.MONGODB_URI;
const connectDB = async () => {
  try {
    if (mongoose.connection.readyState === 0) {
      await  
     mongoose.connect(mongoURI);
      console.log("db connected");
    }
    console.log('Connected to MongoDB successfully!');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    throw error;
  }
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;