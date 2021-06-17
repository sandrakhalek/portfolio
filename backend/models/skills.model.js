import mongoose from "mongoose";

const schema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 2,
    },
    category: String,
});

const Skill = mongoose.model("Skill", schema);

export default Skill;