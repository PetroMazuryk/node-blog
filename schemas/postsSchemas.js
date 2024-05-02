import Joi from "joi";

export const createPostSchema = Joi.object({
  title: Joi.string().min(2).max(20).required(),
  text: Joi.string().min(5).required(),
  tags: Joi.optional(),
  imageUrl: Joi.string().optional(),
});
