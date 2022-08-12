const { calcAreaGameModes } = require("../controllers/store.contrroller");

const storeRouter = require("express").Router();

storeRouter.get("/top",calcAreaGameModes );


module.exports=storeRouter;