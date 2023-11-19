 const express = require('express');
 const mongoose = require('mongoose');
  const jwt = require('jsonwebtoken');
  const bcrypt = require('bcrypt');
   const UsersModel =  require('../models/User');
   const router = express.Router();

router.post('/',async (req,res)=>{
 console.log('register')
 const {username,password,email}= req.body;
 await UsersModel.findOne({email})
 .then((user)=>{
    res.status(400).json({message:"email  is already registered "});  })

    const encryptedpassword = await bcrypt.hash(password,10)
    const user = await UsersModel.create({username,password:encryptedpassword,email})
    const token =  await   jwt.sign({id:user._id,username:user.username,email:user.email},'kkhj',{expiresIn:'2d'})
   console.log(token)
   user.password = undefined;




})
module.exports = router;