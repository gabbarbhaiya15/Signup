const express = require('express');
 const mongoose = require('mongoose');

  const bcrypt = require('bcrypt');
   const UsersModel =  require('../models/User');
   const router = express.Router();

const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
router.use(cookieParser());
router.post( '/',async (req,res)=>{
    try{
    
      const {Loginemail, Loginpassword} = req.body;
    
      const user = await UsersModel.findOne({email: Loginemail})
    
      
      
      if(user){
      
        if( bcrypt.compare(Loginpassword, user.password)){
         // sendverficationEmail(user,res)
         console.log(user.username)
          const token = jwt.sign({_id: user._id, username: user.username,email: Loginemail},'kkkjh',{expiresIn: "2 days"});
          
      
         
      //user.token =  accessToken;
          
          
          res.status(200)
          .cookie('token', token, {httpOnly:true , secure: true, // recommended for security, set to true in production when using HTTPS
          sameSite: 'None',})
          .send({
           success : true,
             token: token,
           user
         
           
      
          }) 
          
      
        }
      }
      
      
    
    }
    catch(e){console.log(e)}
    
    })
    module.exports = router;