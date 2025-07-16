import { Signup } from "../Module/Signup.js"

export const getLogin=(req,res)=>{
    res.render('login',{ isLoggedIn:false})
   
}

export const getSignup=(req,res)=>{
    res.render('Signup',{ isLoggedIn:false})
   
}


export const postSignup=async(req,res)=>{

try {
  
  const{name ,email,password}=req.body
     const exist= await Signup.findOne({email})

     if(exist){
      res.send("Email Already Exist")
     }

     const user= new Signup({name,email,password})
     user.save()
     res.redirect("/login")



} catch (error) {
  res.json({error:'internal server Error',Detalis:error.message})
  
}


}

export const postLogin=async(req,res)=>{
 try {

  const {email,password}=req.body

    const user= await  Signup.findOne({email})

    if(!user|| user.password!==password){

    return  res.send("invalid user Details")
    }

   //  res.cookie("isLoggedIn",true)
  req.session.isLoggedIn=true
    res.redirect("/list")
  
 } catch (error) {

  res.json({error:"internal Server Error ",details: error.message})
  
 }

}


export const postLogout=(req,res)=>{
//res.cookie("isLoggedIn",false)
req.session.isLoggedIn=false

res.redirect('/')


}

