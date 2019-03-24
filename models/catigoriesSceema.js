


var mongoose = require('mongoose')
var Schema = mongoose.Schema;



const userSchema = new Schema({
  email: { type: String },
  CompanyName:{type:String},
  price: { type: String },
  productName: { type: String },
  order: { type: String },
  typeselected: { type: String },
  photoname:{type: String},
  Description:{type:String}
})


const Usercatigories = mongoose.model('Usercatigoriesss', userSchema);

module.exports = Usercatigories;