import express from "express";
import { register, login } from "../controllers/authController.js";

const router = express.Router();

// Route to handle user registration (POST request)
router.post("/register", register);
// Route to handle user login (POST request)
router.post("/login", login);

export default router;
