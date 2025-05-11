
import { getStud, postStud,updateStud, deletStud } from "../controllers/index.js";
import e from "express";

const router = e.Router();

router.get("/studs", getStud);
router.post("/add", postStud)
router.put("/studUp/:id", updateStud)
router.delete("/delete/:id", deletStud)


export default router