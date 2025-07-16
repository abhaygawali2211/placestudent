import { Router } from "express";
const router=Router()
import { getAddstudent,GetallUser,postaddStudent,GetallContact ,getUpdateUser,postUpdateUser,postdeletUser,upload} from "../Controller/studentController.js";

router.get ("/addStudent",getAddstudent)
router.post("/addStudent", upload.single("image"), postaddStudent)
router.get("/list",GetallUser)
router.get("/edit/:id",getUpdateUser)
router.post("/update/:id",postUpdateUser)
router.post("/delete/:id",postdeletUser)
router.get("/Contactlist",GetallContact)


export  const StudentRouter=router