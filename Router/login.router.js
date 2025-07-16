import{Router}from "express"
const authrouter=Router()
import { getLogin,postLogin,postLogout ,getSignup,postSignup} from "../Controller/authController.js"

authrouter.get("/login",getLogin)
authrouter.get('/Signup',getSignup)
authrouter.post('/Signup',postSignup)
authrouter.post('/login',postLogin)
authrouter.post("/logout",postLogout)




export const LoginRouter=authrouter