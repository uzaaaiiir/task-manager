const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

// create Task schema
const taskSchema = new mongoose.Schema(
    {
        description: {
            type: String,
            required: true,
            trim: true,
        },
        completed: {
            type: Boolean,
            default: false,
        },
        owner: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "User",
        },
    },
    {
        timestamps: true,
    }
);

// create Task model
const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
