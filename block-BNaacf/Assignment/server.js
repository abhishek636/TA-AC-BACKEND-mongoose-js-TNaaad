var express = require ('express');
var mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/newDb', (err) => {
    console.log(err? err : "connected to database");
});

var app = express();

app.get('/', (req,res) => {
    res.send('welcome')
})

app.listen(5000,() => {
    console.log('server is listening port 5K')
});

