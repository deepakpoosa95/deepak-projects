mkdir meanauthapp
cd meanauthapp

//npm init - creates package.json file

entry point = (default: index.js) set to app.js


//added in package.json: start and dependencies

"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node app"     <--
  },
  "dependencies": {
    "express": "*",
    "mongoose": "*",
    "bcryptjs": "*",
    "cors": "*",
    "jsonwebtoken": "*",
    "body-parser": "*",
    "passport": "*",
    "passport-jwt": "*"
  },


//Create entry point file = app.js

//added code in app.js:

const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const passport = require("passport");
const mongoose = require("mongoose");

const app = express();

const port = 3000;

app.listen(port, ()=>{
console.log("Server started at port:"+port);
});


app.get("/",(req,res)=>{
 res.send("Home Page");
});

/*
Go to browser and load localhost:3000
Any changes made won't reflect until server is restarted
Installed nodemon --> npm install -g nodemon (-g for global)
Run app by cammand --> nodemon
*/

//Added middleware cors and bodyParser

app.use(cors());
app.use(bodyParser.json());


//Added routes in a separate file "users.js"

const users = require("./routes/users");
app.use('/users',users);

//Added folder "routes" and added code in users.js

const express = require("express");
const router = express.Router();

// register
router.get("/register",(req,res)=>{
res.send("Register");
});

router.get("/authenticate",(req,res)=>{
res.send("Authenticate");
});

router.get("/profile",(req,res)=>{
    res.send("Profile");
});

module.exports = router;


//Go to browser and load 

localhost:3000/users/register
localhost:3000/users/authenticate
localhost:3000/users/profile


// Add client side code folder
//__dirname means current directory == created public folder

app.use(express.static(path.join(__dirname,"public"))); // client side files

//Then create mongoose database
//Create config folder for it with database.js and add code

module.exports = {
  database: "mongodb://localhost:27017/meanauth",
  secret: "yoursecret"
};

//in app.js
const  MongoClient = require("mongodb").MongoClient;
const config = require("./config/database")

MongoClient.connect(config.database, { useNewUrlParser: true },(err,db)=>{
    if(!err){
        console.log("Database connected at :"+config.database);
    }
    else{
        console.log("Database error :"+err);
    }

});





