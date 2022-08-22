import dbConnect from "./mongoConfig";
import Post from "../models/Post";

export const getLatest3Posts = async () => {
  try {
    await dbConnect();
    const posts = await Post.find({ isPublished: true })
      .sort({ date: -1 })
      .limit(3);
    return posts;
  } catch (err) {
    throw new Error("Failed to get posts.");
  }
};

export const getPosts = async () => {
  try {
    await dbConnect();
    const posts = await Post.find({ isPublished: true }).sort({ date: -1 });
    return posts;
  } catch (err) {
    throw new Error("Failed to get posts.");
  }
};

export const getSinglePost = async (slug) => {
  try {
    await dbConnect();
    const post = await Post.findOne({ isPublished: true, slug: slug });
    return post;
  } catch (err) {
    throw new Error("Failed to get post.");
  }
};
