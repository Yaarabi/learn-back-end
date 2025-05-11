
import mongoose, { model, Schema } from "mongoose";

const studSchema = new Schema({
    name: String,
    email: String,
    groupe: Number,
    note: Number
})

export const Student = new model("Student", studSchema)