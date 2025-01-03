import { registerUser, loginUser, verifyEmail, forgotPassword, resetPassword } from "../controllers/auth.controller";

import { validateUser } from "../validators/signup.validator.js";
import { validateLoginUser } from "../validators/login.validator.js";
import { Router } from "express";
const router = Router();

router.post("/register", validateUser, registerUser);
router.post("/login", validateLoginUser, loginUser);
router.get("/verify-email", verifyEmail);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password", resetPassword);

export default router;
