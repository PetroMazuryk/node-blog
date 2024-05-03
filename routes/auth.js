import express from "express";
import { validateBody } from "../middlewares/validateBody.js";
import { schemas } from "../models/users.js";
import ctrl from "../controllers/auth.js";
import { authenticate } from "../middlewares/authenticate.js";
import { upload } from "../middlewares/upload.js";

const authRouter = express.Router();

authRouter.post(
  "/register",
  validateBody(schemas.registerSchema),
  ctrl.register
);

authRouter.post("/login", validateBody(schemas.loginSchema), ctrl.login);

authRouter.get("/current", authenticate, ctrl.getCurrent);

authRouter.post(
  "/upload",
  authenticate,
  upload.single("image"),
  ctrl.updateAvatar
);

export default authRouter;
