import { Contact } from "../Module/Contact.js";
import { User } from "../Module/Student.js";


export const homecontrolle = async (req, res) => {
  try {
    const users = await User.find(); 
    res.render("HomePage", { users ,isLoggedIn: req.isLoggedIn }); 
  } catch (error) {
    res.json({ error: "Internal server error", details: error.message });
  }
};


export const getContact=(req,res)=>{

  res.render("Contact",{isLoggedIn: req.isLoggedIn })

}


export const postContact= async(req,res)=>{
    try {
        
        const{name,email,Mobile_NO,domain,message}=req.body

        
        const newuser=  new Contact({name,email,Mobile_NO,domain,message})

        await newuser.save()
        
        res.redirect("/")
    } catch (error) {
        res.json({error:"internal server error",deatils:error.message})
        
    }
    
}