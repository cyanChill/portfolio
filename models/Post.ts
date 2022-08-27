import mongoose, { Schema, model } from "mongoose";

const PostSchema = new Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  thumbnailUrl: { type: String, required: true },
  excerpt: { type: String, default: "" },
  content: { type: String, required: true },
  date: { type: Date, required: true },
  isPublished: { type: Boolean, default: false, required: true },
});

export default mongoose.models.Post || model("Post", PostSchema);
