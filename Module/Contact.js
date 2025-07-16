import mongoose, { Schema } from "mongoose";

const ContactScema=new Schema({

    name:{type:String,required:true},
    email:{type:String,required:true},
     Mobile_NO:{type:String,required:true},
      domain:{type:String,required:true},
      message:{type:String,required:true}

})

export const Contact= mongoose.model("Inqury_Details",ContactScema)