import dbConnect from "./mongoConfig";
import Post from "../models/Post";

export const getPosts = async () => {
  try {
    await dbConnect();
    // @ts-ignore
    const posts = await Post.find({ isPublished: true }).sort({ date: -1 });
    return posts;
  } catch (err) {
    throw new Error("Failed to get posts.");
  }
};

export const getSinglePost = async (slug: string) => {
  try {
    await dbConnect();
    // @ts-ignore
    const post = await Post.findOne({ isPublished: true, slug: slug });
    return post;
  } catch (err) {
    throw new Error("Failed to get post.");
  }
};
