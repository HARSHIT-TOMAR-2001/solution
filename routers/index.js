const AreaGameMode = require("../models/areaGameMode.model");
const storeRouter = require("./store.router");
const Router = require("express").Router();

Router.use("/v1/gmodes",storeRouter);

Router.post("/add",async (req,res)=>{
    const {areaCode,userCount,gameMode}=req.body;
    const agm=new AreaGameMode({
        userCount:userCount,
        areaCode:areaCode,
        gameMode:gameMode
    }) 
    await agm.save();
    res.status(200).send({success:true,msg:"data added"})
    })
    
    
module.exports = Router;