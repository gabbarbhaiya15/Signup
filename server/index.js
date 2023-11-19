const express = require('express');
const mongoose =  require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt  = require('jsonwebtoken'); 
const  bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser');
const post = require('./controller/Post');
const Userpost = require('./controller/Userpost');
const  login = require('./controller/Login');
const signup = require('./controller/Signup');
const protected = require('./controller/Protected');
const Posts = require('./models/Postsmodel');
const Logout = require('./controller/Logout');



const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
const  port = process.env.PORT || 5000;
app.use(bodyParser.json() );
app.use(cors({credentials: true,
origin:[ 'http://127.0.0.1:5500']
}));
app.use(cookieParser());
mongoose.connect('mongodb://127.0.0.1:27017/Project4',{

useNewUrlParser: true,
useUnifiedTopology: true,

},)
.then(()=>{console.log('connect')})
.catch((err)=>{console.log(err)}) ;


app.use('/signup',signup);
app.use('/login',login);
app.use('/protected',protected);
app.use('/post',post);
app.use('/userpost',Userpost);
app.use('/logout',Logout);





app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });