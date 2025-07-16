import mongoose, { Schema } from "mongoose";

const signupSchema= new Schema({

  
  name: { type: String },
  email: { type: String },
  password: { type: String },
  domain: { type: String },
  degree: { type: String },
  position:{type:String},
  company_website:{type:String},
  image:{type:String}
})

export const User= mongoose.model("userReg",signupSchema)