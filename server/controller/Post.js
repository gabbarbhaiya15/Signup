const mongoose  = require('mongoose');
const express = require('express');
const cors = require('cors');
const router  =  express.Router();
const cloudinary = require('cloudinary').v2;
const Posts =  require('../models/Postsmodel')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const requirelogin = require('../middleware/requirelogin');



 router.post('/',requirelogin, async (req,res)=>{
 try{
    console.log("posting...")
const {title,image} = req.body;
if(!title||!image){
    return res.status(404).json({error:"not found"});
}

const posts  = new Posts({
    postedBy:req.user,
    title,
    image,

})
posts.save().then(result=>{
    res.json({post:result})
})
.catch(err=>{
    console.log(err)
})


 }
 catch(err){
    console.log("error  while posting ")
 }

 })
 module.exports = router;