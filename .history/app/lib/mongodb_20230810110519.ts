import mongoose from "mongoose";
import { mongoUri } from "./mongoUri";


let connection: typeof mongoose;

const connectDB = async () => {
  if (!connection) connection = await mongoose.connect(mongoUri);
  return connection;
};

export default connectDB;
