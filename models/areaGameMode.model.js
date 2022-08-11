const mongoose = require('mongoose');

const AreaGameModeModel = new mongoose.Schema({
    userCount:Number,
    areaCode:Number,
    gameMode:Number,
})
const AreaGameMode = mongoose.model('AreaGameMode', AreaGameModeModel);
module.exports = AreaGameMode;
