const mongoose = require ('mongoose')
const userSchema = new mongoose.Schema({
    name :{
        type : String,
        
    } ,
     email :{
        type : String,
        required : true
    },
   
   password: {
       type:String, 
         required:true
    },
    role: {
        type: String,
        enum: ["v", "b","user", "admin"],
        default: "user",
      }
}) 
module.exports = mongoose.model("users", userSchema);