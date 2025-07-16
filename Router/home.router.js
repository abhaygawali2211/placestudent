import { Router } from "express";
import { homecontrolle ,getContact,postContact} from "../Controller/homecontroller.js";
const router=Router()


router.get ("/",homecontrolle)
router.get('/contact',getContact)
router.post("/contact",postContact)


export const homerouter=router