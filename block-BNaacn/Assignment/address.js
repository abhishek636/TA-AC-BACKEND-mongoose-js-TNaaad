var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var addressSchema = new Schema({
    village: String,
    city: String,
    state:String,
    pin:Number,
    user: Schema.Types.ObjectId
});

// Update address schema to contain required validators for state and city field.

var addressSchema = new Schema({
    village: String,
    city: {type:String, required:true},
    state:{type:String, required:true},
    pin:Number,
    user: Schema.Types.ObjectId
});

// Add timestamps to user and address schema.

var addressSchema = new Schema({
    village: String,
    city: {type:String, required:true},
    state:{type:String, required:true},
    pin:Number,
    user: Schema.Types.ObjectId
},
{timestamps:true}
);

// create model for address schema created above and export it.

let Address = mongoose.model("Address", AddressSchema);
module.exports = Address;