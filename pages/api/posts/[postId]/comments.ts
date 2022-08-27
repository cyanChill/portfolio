import { NextApiRequest, NextApiResponse } from "next";

import dbConnect from "../../../../utils/mongoConfig";
import Comment from "../../../../models/Comment";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "GET":
      await GetComments(req, res);
      return;

    case "POST":
      await AddComment(req, res);
      return;

    default:
      res.status(405).json({ message: "Method is not supported." });
      return;
  }
}

const GetComments = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await dbConnect();
    // @ts-ignore
    const comments = await Comment.find({ postId: req.query.postId }).sort({
      date: 1,
    });
    res.status(200).json({
      message: "Successfully found comments for post.",
      comments: comments,
    });
  } catch (err) {
    res.status(500).json({ message: "Failed to find comments for post." });
  }
};

const AddComment = async (req: NextApiRequest, res: NextApiResponse) => {
  await dbConnect();

  const { name, email, comment } = req.body;

  // Input validation
  const errors = [];
  if (name.trim().length === 0) {
    errors.push({ message: "Name must be nonempty." });
  }
  if (comment.trim().length === 0) {
    errors.push({ message: "Comment must be nonempty." });
  }
  if (errors.length !== 0) {
    res.status(406).json({ message: "Errors found with input.", errors });
    return;
  }

  try {
    // @ts-ignore
    const newComment = await Comment.create({
      postId: req.query.postId,
      name,
      email,
      comment,
      date: Date.now(),
    });

    res.status(201).json({
      message: "Successfully created comment.",
      comment: newComment,
    });
  } catch (err) {
    res.status(500).json({ message: "Failed to create comment." });
  }
};
