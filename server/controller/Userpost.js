const mongoose  = require('mongoose');
const express = require('express');
const cors = require('cors');
const router  =  express.Router();
const Posts = require('../models/Postsmodel')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const  requirelogin = require('../middleware/requirelogin')
router.get('/',requirelogin,(req,res)=>{

Posts.find({postedBy:req.user._id})
.populate("postedBy","_id input")
.then((post)=>{
    res.send(
        post
    );
})
.catch((error)=>{
    console.log("error in my post")
})


})
module.exports= router;