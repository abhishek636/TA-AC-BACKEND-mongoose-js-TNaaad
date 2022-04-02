var express = require('express');
var mongoose = require('mongoose');

//connected to mongoose
mongoose.connect("mongodb://localhost/Assignment",
{useNewUrlParser: true, useUnifiedTopology: true},
(err) =>{
    console.log(err ? err : "connected true");
}
);

var app = express();

app.get('/',(req,res)=>{
    res.send('Welcome');
});

app.listen(3000,()=>{
    console.log('server is listening port 3K');
});