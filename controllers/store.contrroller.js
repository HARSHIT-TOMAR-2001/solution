require("dotenv").config();
const mongoose = require("mongoose");
const AreaGameMode = require("../models/areaGameMode.model");
const ObjectId = mongoose.Types.ObjectId;

const calcAreaGameModes=async (req,res)=>{
    const areaCode=parseInt(req.query.arcode);
    try {
        const result=await AreaGameMode.find({areaCode:areaCode}).sort({userCount:-1})

        res.status(200).send({success:true,result:result})
    } catch (error) {
        res.status(400).send({success:false,msg:error.message})
    }
}

module.exports={
    calcAreaGameModes
}