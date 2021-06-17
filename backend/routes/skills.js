import express from "express";
import {
    getSkills,
    addSkill,
    deleteSkill,
} from "../controllers/skills.controller.js";

const router = express.Router();
router.get("/", getSkills);
router.post("/add", addSkill);
router.delete("/:id", deleteSkill);

export default router;