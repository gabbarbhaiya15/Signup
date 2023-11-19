const mongoose = require('mongoose');
const express = require('express');
const UserSchema = new mongoose.Schema({
 username:{
    type:String,
    required:[true]
 },
 password:{
   type:String,
   required:[true]
 },
 email:{
type:String,
required:[true]
 }


})
const Usersmodel =  mongoose.model('users',UserSchema)
module.exports = Usersmodel;