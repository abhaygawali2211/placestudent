import multer from "multer"
import { Contact } from "../Module/Contact.js"
import { User } from "../Module/Student.js"




    const storage= multer.diskStorage({

    destination:(req,file,cb)=>{
        cb(null,"./public/uploads")



    },
   filename:(req,file,cb)=>{
    
    cb(null,Date.now() + "-" + file.originalname)

   }

})
export const upload= multer({storage})



export const getAddstudent=(req,res)=>{
    res.render('AddStudent',{isLoggedIn: req.isLoggedIn })
   

}

export const postaddStudent= async(req,res)=>{
    try {
        
        const{name,email,password,degree,domain,position,company_website}=req.body

        const image= req.file ? req.file.filename:null

        
        const newuser=  new User({name,email,password,degree,domain,position,company_website,image})

        await newuser.save()
        
        res.redirect("/")
    } catch (error) {
        res.json({error:"internal server error",deatils:error.message})
        
    }
    
}

export const GetallUser= async(req,res)=>{
    try {
         const users=await User.find()
         res.render("UserTable",{users,isLoggedIn: req.isLoggedIn })
    } catch (error) {
        
        res.json({error:"internal server error ",details:error.message})
    }
}

export const getUpdateUser=async(req,res)=>{

     try {
          const user=await User.findById(req.params.id)
         res.render("EditUser",{user,isLoggedIn: req.isLoggedIn })

     } catch (error) {
        res.json({error:"internal server error",details:error.message})
     }

}


export const postUpdateUser= async(req,res)=>{
try {
        const{name,email,password,degree,domain}=req.body
      const uodateuser= await User.findByIdAndUpdate(req.params.id,{name,email,password,degree,domain,position,company_website},{new:true})
    if(!uodateuser) res.json({error:"errr while updateng user"})
        res.redirect("/list")
} catch (error) {
    
}

}

export const postdeletUser= async(req,res)=>{
try {
    
    await User.findByIdAndDelete(req.params.id)
    res.redirect("/list")

} catch (error) {

    res.json({error:"internal server error ",deatails: error.message})
    
}



}


export const GetallContact= async(req,res)=>{
    try {
         const users=await Contact.find()
         res.render("ContactTable",{users,isLoggedIn: req.isLoggedIn })
    } catch (error) {
        
        res.json({error:"internal server error ",details:error.message})
    }
}