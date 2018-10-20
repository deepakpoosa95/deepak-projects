//importing modeules

var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');
var path = require('path');

var app = express();
const port = 3000;

//mongodb connection
mongoose.connect('mongodb://localhost:27017/contactlist');

mongoose.connection.on('connected',()=>{
    console.log('Connected to DB at 27017');
});

mongoose.connection.on('error',(err)=>{
    if(err){
        console.log('Database error :'+err);
    }
});

app.use(cors());
app.use(bodyparser.json());

app.use(express.static(path.join(__dirname,'public')));


const route = require('./routes/route.js');

app.use('/api',route);



app.get('/',(req,res)=>{
    res.send("HEllo");
})

app.listen(port,()=>{
    console.log("Express server listening at port"+port);
});

