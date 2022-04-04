var express = require('express');

var mongoose = require('mongoose');

var User = require('./user');

mongoose.connect('mongodb://localhost/sample', {useNewUrlParser: true, useUnifiedTopology: true},
(err) => {
    console.log(err? err : "connected to server")
});

var app = express();

app.use(express.json());

app.get('/', (req,res) => {
    res.send('Welcome');
});

app.post('/users', (req,res)=> {
    console.log(req.body);
    User.create(req.body, (err,product) =>{
        console.log(err, product);
    });
    res.send(req.body);
});

app.get("/users",(req,res) => {
    User.find({}, (err, products) => {
        console.log(err,products);
        res.send(products);
    })
});


//on GET request on '/users/:id' route, fetch a user
//use Model.find({_id: 'some-id'}) // use _id of inserted document in database
app.get("/usersid",(req,res) => {
    User.find({_id:"624a8a28b2f3d95c59cd1363"}, (err, products) => {
        console.log(err,products);
        res.send(products);
    })
});

//use Model.findOne({_id: 'some-id'})

app.get("/usersOne",(req,res) => {
    User.findOne({_id:"624a8a3eb2f3d95c59cd1365"}, (err, products) => {
        console.log(err,products);
        res.send(products);
    })
});

//use Model.findById(id)

app.get("/users/:id",(req,res) => {
    User.findById(req.params.id, (err, products) => {
        console.log(err,products);
        res.send(products);
    })
});

//on PUT request on '/users/:id', update a user

//use Model.update

app.put('/userupdate',(req,res) =>{
    User.update({"name":"reena"},req.body,{new:true},(err,updatedProduct) => {
        console.log(err);
        res.json(updatedProduct);
    })
})

//use Model.updateOne

app.put('/usersupdateone',(req,res) =>{
    User.updateOne({"name":"sagar"},req.body,{new:true},(err,updatedProduct) => {
        console.log(err);
        res.json(updatedProduct);
    })
})


//use Model.findByIdAndUpdate(id)

app.put('/usersupdate',(req,res) =>{
    User.findByIdAndUpdate(req.params.id,req.body,{new:true},(err,updatedProduct) => {
        console.log(err);
        res.json(updatedProduct);
    })
})

app.put('/users/:id',(req,res) =>{
    User.findByIdAndUpdate(req.params.id,req.body,{new:true},(err,updatedProduct) => {
        console.log(err);
        res.json(updatedProduct);
    })
})

//delete a user using Model.findByIdAndDelete()

//on DELETE request on '/users/:id'

app.delete("/users/:id", (req, res) => {
    User.findByIdAndDelete(req.params.id, (err, user) => {
      console.log(err);
      res.send(`${user.name} user deleted`);
    });
});

app.listen(3000, () => {
    console.log('Server is listening on port 3K')
})