const User=require("../models/users")
exports.createEntry=async(req, res)=>{
try {
    const{userFirstName, userLastName, cars, bikes}=req.body;
    const user=new User({
        userFirstName, userLastName, cars, bikes
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
