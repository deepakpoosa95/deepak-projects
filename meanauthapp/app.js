const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const passport = require("passport");
//const mongoose = require("mongoose");
const  MongoClient = require("mongodb").MongoClient;
const config = require("./config/database")

MongoClient.connect(config.database, { useNewUrlParser: true },(err,db)=>{
    if (err) throw err;
  console.log("Database created at : "+ config.database);
  db.close();
    // if(!err){
    //     console.log("Database connected at :"+config.database);
    // }
    // else{
    //     console.log("Database error :"+err);
    // }

});



const app = express();

const users = require("./routes/users"); // added routesfile

const port = 3000;


// added middleware - cors , bodyparser
app.use(cors());

app.use(express.static(path.join(__dirname,"public"))); // client side files


app.use(bodyParser.json());

app.use('/users',users); // anything with path /users will go to user.js file



app.listen(port, ()=>{
console.log("Server started at port:"+port);
});

//index route  -- add routes on route.js
app.get("/",(req,res)=>{
 res.send("Home Page");
});