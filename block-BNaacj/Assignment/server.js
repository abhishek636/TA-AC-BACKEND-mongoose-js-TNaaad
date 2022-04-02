var express = require('express');

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/Assignment', (err) => {
    console.log(err? err : "connected to dadabase")
});

var app = express();

app.listen(4000, () => {
    console.log("Server is listening on port 4K")
})
