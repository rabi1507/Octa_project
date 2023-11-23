const mongoose =require("mongoose");

require("dotenv").config();

exports.connect =()=>{
    mongoose.connect(process.env.MONGOOSE_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    } )
    .then(()=>{console.log("Db connected successfully")})
    .catch((err)=>{
        console.log("db connection issues");
        process.exit(1);
    })
}