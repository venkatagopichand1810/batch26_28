import express from "express";

import { createStudent } from "../controllers/studentController.js";

// use the express
const router = express.Router();

router.post("/postStudent", createStudent)

export default router
