const mongoose = require('mongoose');
const express = require('express');
 const PostsSchema = new  mongoose.Schema({
    userID:{type:mongoose.Schema.Types.ObjectId,ref:"users"},
    title:{type:String,
    required:true},
    image:{
        type:String
    },
    postedBy:{type: mongoose.Schema.Types.ObjectID,ref:"users"},
    
 },
 {
    timestamps:true
})
const Posts =   mongoose.model('Post',PostsSchema) 
module.exports = Posts