import mongoose from "mongoose";

const PostSchema = new mongoose.Schema(
  {
    text: { type: String },
    // _id: { type: String}
  },
  { timestamps: true }
);

export default mongoose.model("Post", PostSchema);
