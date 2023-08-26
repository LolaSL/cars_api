import mongoose from "mongoose";

const mongoURI = ;

const connectDB = async () => {
  try {
    // Check if mongoose is not already connected
    if (mongoose.connection.readyState !== 1) {
      await mongoose.connect(mongoURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log("Connected to MongoDB successfully!");
    } else {
      console.log("Already connected to MongoDB.");
    }
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    throw error;
  }
};

export default connectDB;