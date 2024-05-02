import express from "express";
import { authenticate } from "../middlewares/authenticate.js";
import { validateBody } from "../middlewares/validateBody.js";
import { createPostSchema } from "../schemas/postsSchemas.js";
import ctrl from "../controllers/post.js";

const postRouter = express.Router();

postRouter.post(
  "/",
  authenticate,
  validateBody(createPostSchema),
  ctrl.createPost
);

export default postRouter;
