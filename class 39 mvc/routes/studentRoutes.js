import express from "express";

import { createStudent, getStudents } from "../controllers/studentController.js";

// we have to import router
const router = express.Router()


router.post("/students", createStudent)
router.get("/students", getStudents)

export default router