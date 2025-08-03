// config/db.js
import mongoose from "mongoose";

const connectDB = async () => {
  const url = process.env.MONGO_URI;

  try {
    const conn = await mongoose.connect(url, {
      dbName: "travel-blog",
      bufferCommands: true,
    });

    console.log(`MongoDB Connected`);
  } catch (error) {
    console.error("MongoDB connection error:", error.message);
    process.exit(1);
  }
};

export default connectDB;
