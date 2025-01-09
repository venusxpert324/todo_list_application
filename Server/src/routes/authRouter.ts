import { Router } from "express";
import { AuthValidator } from "../validators";
import { AuthController } from "../controllers";
import { checkAuth } from "../utils";

export const authRouter = Router();

// POST /api/v1/auth/register - for user registration.
authRouter.post(
  "/register",
  AuthValidator.registerValidator(),
  AuthController.registerController
);

// POST /api/v1/auth/login - for user login.
authRouter.post(
  "/login",
  AuthValidator.loginValidator(),
  AuthController.loginController
);

// auth check
authRouter.get(
  "/check",
  checkAuth,
  AuthController.checkAuthController
);

authRouter.post(
  "/logout",  
  AuthController.logoutController
);
