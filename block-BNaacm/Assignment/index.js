const express = require('express');

let mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/newDb',(err)=>{
    console.log(err? err : 'Connected  to   the database');
})

let app  = express();

app.listen(5000 ,()=>{
    console.log('server is listening at the port 5K');
});