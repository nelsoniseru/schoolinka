import mongoose from 'mongoose';
const connectDB = async () => {
  try {

    const db = await mongoose.connect('mongodb://127.0.0.1:27017/schoolinka');

    console.log(`MongoDB connected: ${db.connection.host}`);
  } catch (error) {
    console.error('MongoDB connection failed:', error);
    process.exit(1);
  }
};

export default connectDB;