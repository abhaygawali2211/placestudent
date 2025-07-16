import express from "express"

import mongoose from "mongoose"
import { LoginRouter } from "./Router/login.router.js"
import { StudentRouter } from "./Router/Student.router.js"
import { homerouter } from "./Router/home.router.js"
import cookieParser from "cookie-parser"
import session from "express-session"
import ConnectMongoDBSession from "connect-mongodb-session"

const MongoDBStore=ConnectMongoDBSession(session)
const app= express()
const port=3000

 const Db_path="mongodb://127.0.0.1:27017/Abhu"
try {
   await mongoose.connect(Db_path)
} catch (error) {
    console.log(error)
    process.exit()
    
}
const store=new MongoDBStore({
uri:Db_path,
collection:"sesion"

})

app.set("view engine","ejs")
app.use(express.urlencoded())
app.use(cookieParser())
app.use("/uploads", express.static("public/uploads"))

app.use(session({
secret:"aaasdfghjkwertyuietdfg",
resave:false,
saveUninitialized:true,
store

}))
app.use((req,res,next)=>{

    req.isLoggedIn= req.session.isLoggedIn===true
    next()

})




app.use(LoginRouter)

app.use(homerouter)




app.use('/',(req,res,next)=>{

    if(req.isLoggedIn){
        next()
    }
    else
    
  res.redirect  ("/")

})

app.use("/",StudentRouter)



app.listen(port,()=>{

    console.log(`running on ${port}`)
})