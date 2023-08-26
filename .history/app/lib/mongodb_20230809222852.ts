
// import mongoose from "mongoose";
// const mongoURI = "mongodb+srv://lolashepota:<03o16u5FpAAf6VnW>@cluster0.qvqh5wa.mongodb.net/contact_db";

// const connectDB = async () => {
//   try {
//     if (mongoose.connection.readyState === 0) {
//       await
//         mongoose.connect(mongoURI);
      
//       console.log("db connected");
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };

// export default connectDB;
import mongoose from "mongoose";
const MONGO_URI = "mongodb+srv://lolashepota:<03o16u5FpAAf6VnW>@cluster0.qvqh5wa.mongodb.net/contact_db";
const connectDB = async () => {
  try {
    if (mongoose.connection.readyState === 0) {
      await mongoose.connect(process.env.MONGODB_URI);
      console.log("db connected");
    }
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;