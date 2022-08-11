require('dotenv').config()
const express = require('express'); 
const app = express();   
const cors = require("cors")           
var mongoose = require('mongoose');
const Router = require("./routers");
const bodyParser = require('body-parser');
const connectDB = require("./database/connect")();


const PORT =process.env.PORT || 5000;

app.use(bodyParser.urlencoded({extended: true})) 
app.use(bodyParser.json()) 
app.use(cors())

app.use("/api",Router);
app.get('/',(req,res)=>res.send('LILA GAMES'))

const server = app.listen(PORT, function () {
    console.log("Server is up and running at port:", PORT);
  });