const mongoose = require('mongoose');
const bcrypt = require('bycryptjs');
const config = require('../config/database');

//userschema
const UserSchema = mongoose.Schema({
name:{
    type: String
},
email:{
    type: String,
    required : true
},
username : {
    type: String,
    required : true
},
password:{
    type: String,
    required: true
}
});

const User = module.exports = mongoose.model("User", UserSchema);




