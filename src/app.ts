import cors from "cors";
import express from "express";
import mongoose from 'mongoose';
import blogRoutes from "./routes/blog.route";

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB Connection
 mongoose.connect('mongodb://127.0.0.1:27017/schoolinka').then((db)=>{
  console.log(`MongoDB connected: ${db.connection.host}`);
 }).catch(error=>{
  console.error('MongoDB connection failed:', error);
  process.exit(1);
 })

mongoose.connection.on('error', (error) => {
  console.error('MongoDB Connection Error:', error);
});

// API Routes
app.use("/blogs", blogRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
