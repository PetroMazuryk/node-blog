import express from "express";
import { authenticate } from "../middlewares/authenticate.js";
import { validateBody } from "../middlewares/validateBody.js";
import { createPostSchema, updatePostSchema } from "../schemas/postsSchemas.js";
import { isValidId } from "../middlewares/isValidId.js";
import ctrl from "../controllers/post.js";

const postsRouter = express.Router();

postsRouter.post(
  "/",
  authenticate,
  validateBody(createPostSchema),
  ctrl.createPost
);

postsRouter.get("/", authenticate, ctrl.getAllPosts);

postsRouter.get("/:id", authenticate, isValidId, ctrl.getOnePost);

postsRouter.delete("/:id", authenticate, isValidId, ctrl.deletePost);

postsRouter.put(
  "/:id",
  authenticate,
  isValidId,
  validateBody(updatePostSchema),
  ctrl.updatePost
);

export default postsRouter;
