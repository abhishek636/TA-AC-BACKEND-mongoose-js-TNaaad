var express = require('express');

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Assignment',{
    useNewUrlParser: true, useUnifiedTopology: true},
    (err) => {
        console.log(err? err : "connected to database")
    }
);

var app = express();

app.listen(3000, () => {
    console.log('Server is listening on port 3K')
})