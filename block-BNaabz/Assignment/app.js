var express  = require('express');

var mongoose = require("mongoose");

mongoose.connect(' mongodb://localhost:27017/Assignment',(err)=>{
    console.log(err ? err : "connected to database");
});
