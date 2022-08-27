import mongoose, { Schema, model, Types } from "mongoose";

const CommentSchema = new Schema({
  postId: { type: Schema.Types.ObjectId, ref: "Post", required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  comment: { type: String, required: true },
  date: { type: Date, required: true },
});

export default mongoose.models.Comment || model("Comment", CommentSchema);
