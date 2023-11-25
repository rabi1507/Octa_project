const User=require("../models/users")
const carBikeCollection=require('../models/frontendRenderData');
exports.createEntry=async(req, res)=>{
try {
    const{ car, bike}=req.body;
    const user=new carBikeCollection({
         car, bike
    });
    const data= await user.save();
    console.log(data);
    res.status(201).json({
        success: true,
        message: "Entry created successfully",
        data: data
    });
} catch (error) {
    return res.status(500).json({
        error:"Error while creating entry",
    })
}
}

exports.saveData=async(req, res)=>{
    try {
       const{firstName, lastName, bike, car} =req.body;
       if(!firstName || !lastName || !bike || !car){
        return res.sendStatus(422)
       }

       let saveDatas=await User.create(req.body);
       res.status(201).send(saveDatas);
        
    } catch (error) {

        res.sendStatus(500)
        
    }

}


exports.getData=async(req, res)=>{
    try {
        data=await User.find({});
        res.status(200).json({
            success:true,
            data:data,
            message:"data send successfully",
        });
    } catch (error) {
        res.status(501).json({
            success:false,
            err:"can not find",
            message:error
        }); 
    }
    
}


