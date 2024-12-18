const {
	registerUser,
	loginUser,
	verifyEmail,
    forgotPassword,
    resetPassword
} = require("../controllers/auth.controller");

const { validateUser } = require("../validators/signup.validator");
const { validateLoginUser } = require("../validators/login.validator");
const express = require("express");
const router = express.Router();

router.post("/api/v1/auth/register", validateUser, registerUser);
router.post("/api/v1/auth/login", validateLoginUser, loginUser);
router.get("/api/v1/auth/verify-email", verifyEmail);
router.post("/api/v1/auth/forgot-password", forgotPassword);
router.post("/api/v1/auth/reset-password", resetPassword);

module.exports = router;
