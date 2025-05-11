
import { Student } from "../models/schema.js";

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
    try{
        const result = await student.findByIdAndUpdate(id, details, { new: true })
        if(!result){
            return res.send({
                success: false,
                message: "student not found",
            })
        }
        res.status(200).json(result)
    }catch (err) {
        res.status(500).json({ message : "Error in the putch" })
    }
}

export {getStud, postStud}