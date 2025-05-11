
import { Student } from "../models/schema.js";
// import mongoose from "mongoose";

// get

const getStud = async (req, res)=>{
    try{
        const studs = await Student.find();
        res.status(200).json(studs)
    }catch (err) {
        res.status(500).json({ message : "Error in fetching" })
    }
}

// post 

const postStud = async (req, res)=>{
    try{
        const newStud = new Student(req.body);
        await newStud.save();
        res.status(200).json(newStud)
    }catch (err) {
        res.status(500).json({ message : "Error in the creation" })
    }
}

// update

const updateStud = async (req, res)=>{
    const {id} = req.params
    const details = req.body
    // if (!mongoose.Types.ObjectId.isValid(id)) {
    //     return res.status(400).json({ message: "Invalid ID format" });
    // }
    try{
        const result = await Student.findByIdAndUpdate(id, details, { new: true })
        if(!result){
            return  res.status(404).json({ message : "Not found" })
        }
        
        res.status(200).json(result)
    }catch (err) {
        res.status(500).json({ message : "Error in the put" })
    }
}

// delete

const deletStud = async (req, res)=>{
    const {id} = req.params
    const details = req.body
    // if (!mongoose.Types.ObjectId.isValid(id)) {
    //     return res.status(400).json({ message: "Invalid ID format" });
    // }
    try{
        const result = await Student.findByIdAndDelete(id, details, { new: true })
        if(!result){
            return  res.status(404).json({ message : "Not found" })
        }
        
        res.status(200).json(result)
    }catch (err) {
        res.status(500).json({ message : "Error in the delet" })
    }
}

export {getStud, postStud, updateStud, deletStud}