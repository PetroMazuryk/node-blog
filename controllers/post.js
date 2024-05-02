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

const getAllPosts = async (req, res) => {
  const {
    user: { _id: owner },
    query: { page = 1, limit = 5 },
  } = req;
  const skip = (page - 1) * limit;

  const posts = await Post.find({ owner }, "-createdAt -updatedAt", {
    skip,
    limit: Number(limit),
  }).populate("owner", "email ");

  res.json(posts);
};

const getOnePost = async (req, res) => {
  const { id } = req.params;
  const { _id: owner } = req.user;

  const result = await Post.findOne({ _id: id, owner });

  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json(result);
};

export default {
  createPost: ctrlWrapper(createPost),
  getAllPosts: ctrlWrapper(getAllPosts),
  getOnePost: ctrlWrapper(getOnePost),
};
