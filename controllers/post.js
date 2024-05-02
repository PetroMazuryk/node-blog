import { HttpError } from "../helpers/HttpError.js";
import { ctrlWrapper } from "../helpers/ctrlWrapper.js";
import { Post } from "../models/posts.js";

const createPost = async (req, res) => {
  const { _id: owner } = req.user;
  const result = await Post.create({ ...req.body, owner });

  if (!result) {
    throw HttpError(201, "Not found");
  }
  res.status(201).json(result);
};

export default {
  createPost: ctrlWrapper(createPost),
};
