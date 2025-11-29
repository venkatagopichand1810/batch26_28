import express from "express";
import { register } from "../controllers/userController.js";

// express router
const router = express.Router();


// routes
router.post("/register", register);

export default router