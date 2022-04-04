var express = require('express');
var mongoose = require('mongoose');
var User = require('./model');
var Comment = require('./model');
var Article = require('./model')

mongoose.connect('mongodb://localhost:27017/new', {useNewUrlParser:true, useUnifiedTopology:true},
(err) => {
    console.log(err? err : "connected to database");
});

var app = express();

app.use(express.json());
app.use(express.urlencoded());

app.listen(6000, () => {
    console.log('Server is listening on port 6K')
})