const express = require("express");
const router = express.Router();

// register
router.get("/",(req,res)=>{
    res.send("Users Page");
});


router.post("/register",(req,res)=>{
res.send("Register");
});

router.post("/authenticate",(req,res)=>{
res.send("Authenticate"); 
});

router.get("/profile",(req,res)=>{
    res.send("Profile");
});

module.exports = router;