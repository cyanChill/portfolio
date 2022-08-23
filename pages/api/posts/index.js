import dbConnect from "../../../utils/mongoConfig";
import Post from "../../../models/Post";

export default async function handler(req, res) {
  switch (req.method) {
    case "GET":
      await GetLatest3Posts(req, res);
      return;

    default:
      res.status(405).json({ message: "Method is not supported." });
      return;
  }
}

const GetLatest3Posts = async (req, res) => {
  try {
    await dbConnect();
    const posts = await Post.find({ isPublished: true })
      .sort({ date: -1 })
      .limit(3);
    res.status(200).json({
      message: "Successfully found latest 3 posts.",
      posts: posts,
    });
  } catch (err) {
    res.status(500).json({ message: "Failed to get latest 3 posts." });
  }
};
