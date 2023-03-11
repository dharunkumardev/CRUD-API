import mongoose from "mongoose"

const userSchema= new mongoose.Schema({
 name:{
    type:String,
    required:true
 },
 email:{
    type:String,
    required:true
 },
 password:{
    type:String,
    required:true
 },
 isuser:{
   type:Boolean,
   default:true
 },
 mobile:{
    type:String,
    required:true
 }
})

var User=mongoose.model('User',userSchema)



export default User