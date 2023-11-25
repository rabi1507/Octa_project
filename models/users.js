const mongoose=require("mongoose");
const userSchema=new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
    },
    lastName:{
        type:String,
        required:true,
    },
    bike:{
        type:String,
        required:true,

    },
    car:{
        type:String,
        required:true,
    }
})
module.exports=mongoose.model("User", userSchema);