const express=require('express');
const router=express.Router();

const {createEntry, getData}=require("../controller/controller");

router.post("/create", createEntry );
router.get("/getData", getData);

module.exports=router;
