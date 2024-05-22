import { Router } from "express";
import {
  register,
  login,
  logout,
  profile,
  verifyToken
} from "../controllers/auth.controllers.js";
import { authRequire } from "../middlewares/validateTokens.js";
import { validateSchema } from "../middlewares/validateAuth.middleware.js";
import { registerSchema, loginSchema } from "../schemas/auth.schema.js";
const routes = Router();

routes.post("/register", validateSchema(registerSchema), register);
routes.post("/login", validateSchema(loginSchema), login);
routes.post("/logout", logout);
routes.get("/verify", verifyToken);
routes.get("profile", authRequire, profile);

export default routes;
