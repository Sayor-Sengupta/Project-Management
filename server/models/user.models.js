import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({

    userName:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true
    },
    fullName:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
        minlength:6
    }
},{timeseries:true})

export const User= mongoose.model("User",userSchema)