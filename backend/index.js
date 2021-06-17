//using import instead of 'const express = require('express')'
import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import skillsRoute from "./routes/skills.js";
import emailRoute from "./routes/email.js";

const app = express();

app.use(express.json()); // parse requests of content-type - application/json
app.use(express.urlencoded({ extended: true })); // parse requests of content-type - application/x-www-form-urlencoded
app.use(cors());

const CONNECTION_URL = "mongodb://127.0.0.1:27017/portfolio";
const PORT = process.env.PORT || 5000;
app.use("/mySkills", skillsRoute);

mongoose
    .connect(CONNECTION_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }) // if success then
    .then(() => {
        console.log("Connected to the database!");
        app.listen(PORT, () => console.log(`Server is running on port ${PORT}.`));
    })
    .catch((err) => {
        console.log("Cannot connect to the database!", err);
        process.exit();
    });

mongoose.set("useFindAndModify", false);

app.use("/contactme", emailRoute);