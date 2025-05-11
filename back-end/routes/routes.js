
import { getStud, postStud } from "../controllers/index.js";
import e from "express";

const router = e.Router();

router.get("/studs", getStud);
router.post("/add", postStud)


export default router