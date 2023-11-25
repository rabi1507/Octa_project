const mongoose=require("mongoose");
const bikeCarCollection=new mongoose.Schema({
    // for two wheeker we are using bike and for four wheeler we are using car
    
    bike:{
        type:[String],
        required:true,

    },
    car:{
        type:[String],
        required:true,
    }
})
module.exports=mongoose.model("bikeCarCollection", bikeCarCollection);