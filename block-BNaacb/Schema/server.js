var express = require('express');
var app = express();

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/schema',(err) => {
    console.log(err?err : 'connected to database')
})



app.listen(3000, () =>{
    console.log('server is listening on port 3K')
})
