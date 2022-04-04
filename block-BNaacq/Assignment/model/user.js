var mongoose =require('mongoose');

var Schema = mongoose.Schema;

var userSchema = new Schema({
    name:String,
    email:{type:String,match:/@/},
    age:{type:String, max:30} 
})

var User = mongoose.model('User', userSchema);
module.exports = User;