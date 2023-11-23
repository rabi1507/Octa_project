const mongoose=require("mongoose");
const userSchema=new mongoose.Schema({
    userFirstName:{
        type:String,
        required:true,
    },
    userLastName:{
        type:String,
        required:true,
    },
    bikes:{
        type:[String],
        required:true,

    },
    cars:{
        type:[String],
        required:true,
    }
})
module.exports=mongoose.model("User", userSchema);