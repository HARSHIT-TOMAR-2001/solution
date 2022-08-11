const { calcAreaGameModes } = require("../controllers/store.contrroller");

const storeRouter = require("express").Router();

storeRouter.get("/gmodes",calcAreaGameModes );


module.exports=storeRouter;