import mongoose, { Schema } from "mongoose";

const SignupSchema= new Schema({

name:{type:String,required:true},
email:{type:String,required:true,unique:true},
password:{type:String, required:true}

})

export const Signup= mongoose.model("Signup",SignupSchema)