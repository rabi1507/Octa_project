const express=require('express');
const app=express();
const bodyParser = require('body-parser')
const database=require("./config/config");
require("dotenv").config();
const appRoute=require('./router/route');

console.log(appRoute);
app.use(bodyParser.json())
app.use(express.json());
app.use('/api/v1', appRoute);

app.use((req, res)=>{
    res.status(200).json({
        success:true,
        message:"middle finger :)"
        
    });
})
const port=process.env.PORT || 6000;
database.connect();
app.listen(port, ()=>{
    console.log(`app is runing at ${port}`);
});
