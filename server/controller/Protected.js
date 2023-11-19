const mongoose  = require('mongoose');
const express = require('express');
const cors = require('cors');
const router  =  express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const requirelogin = require('../middleware/requirelogin');



router.get('/',requirelogin, async(req,res)=>{
console.log("protecting")
res.json(req.user);

})
module.exports = router;
