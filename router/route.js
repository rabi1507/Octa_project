const express=require('express');
const router=express.Router();


const {createEntry, getData, saveData}=require("../controller/controller");

router.post("/createBikeAndCar", createEntry );
router.post("/saveData", saveData);
router.get("/getData", getData);

module.exports=router;
