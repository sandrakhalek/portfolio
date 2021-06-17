//Create all the handlers for our routes
import Skill from "../models/skills.model.js";

export const getSkills = async(req, res) => {
    try {
        const skills = await Skill.find();
        res.status(200).json(skills);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const addSkill = async(req, res) => {
    const name = req.body.name;
    const category = req.body.category;
    const newSkill = new Skill({ name, category });

    try {
        await newSkill.save();

        res.status(201).json("Skill added!");
    } catch (error) {
        res.status(409).jsons({ message: error.message });
    }
};

export const deleteSkill = async(req, res) => {
    try {
        await Skill.findByIdAndDelete(req.params.id);
        res.status(200).json("Skill deleted!");
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};