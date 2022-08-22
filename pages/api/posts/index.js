import dbConnect from "../../../utils/mongoConfig";
import Post from "../../../models/Post";

export default async function handler(req, res) {
  switch (req.method) {
    case "GET":
      await GetPosts(req, res);
      return;

    default:
      res.status(405).json({ message: "Method is not supported." });
      return;
  }
}

const GetPosts = async (req, res) => {
  try {
    await dbConnect();
    const posts = await Post.find({ isPublished: true })
      .sort({ date: -1 })
      .limit(3);
    res.status(200).json({
      message: "Successfully found posts.",
      posts: posts,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to find posts." });
  }
};
