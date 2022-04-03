var mongoose = require('mongoose');

var Schema = mongoose.Schema;


//create a user schema with following fields and type 1.name -> string 2.email -> string 3.age -> number
var userSchema = new Schema({
   name:String,
   email:String,
   age:Number
});


// update user schema to make email lowercase and default age to be 0.

userSchema = new Schema({
    name:String,
    email:{type:String, lowercase:true},
    age:{type:Number, default:0}
});

// Update user schema

// contains password field with minimum 5 characters
// add createdAt field of type date and default it to current date.

userSchema = new Schema({
    name:String,
    email:{type:String, lowercase:true},
    age:{type:Number, default:0},
    password:{type:String, min:5},
    createAt:{type:Date, default: new Date()}
});
 
//Add favourites in user schema of type array of strings.

userSchema = new Schema({
    name:String,
    email:{type:String, lowercase:true},
    age:{type:Number, default:0},
    password:{type:String, min:5},
    createAt:{type:Date, default: new Date()},
    favourites:[String]
});

// Add timestamps to user and address schema.

userSchema = new Schema({
    name:String,
    email:{type:String, lowercase:true},
    age:{type:Number, default:0},
    password:{type:String, min:5},
    createAt:{type:Date, default: new Date()},
    favourites:[String]
},
{ timestamps: true }
);

// create model for users schema created above and export it.
let User = mongoose.model("User", articleSchema);
module.exports= User;