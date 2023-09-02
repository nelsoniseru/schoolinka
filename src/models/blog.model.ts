import mongoose, { Document, Schema } from "mongoose";

export interface Blog extends Document {
  title: string;
  content: string;
  author: string;
}

const BlogSchema: Schema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: String, required: true },
});

export default mongoose.model<Blog>("Blog", BlogSchema);
