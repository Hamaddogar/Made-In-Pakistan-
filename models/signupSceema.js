// let mongooes = require("mongoose");
// const sceema = { email: String, password: String, name: String, fathername: String, typeselected: String };
// const Users = mongooes.model('User', sceema);


var mongoose = require( 'mongoose' )
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');


const userSchema =  new Schema({
 email:{type:String,required: [true, 'Email must be provieded']},
 password:{type:String,required: [true, 'password must be given ']},
 name:{type:String,required: [true, 'name must be given ']},
 fathername:{type:String,required: [true, 'father name given should be']},
 typeselected:{type:String,required: [true, 'type must be selected']},
//  resetPasswordToken: String,
//  resetPasswordExpires: Date
 
 

})
// bcrypt password code 
userSchema.pre('save', function(next) {
  var user = this;
  var SALT_FACTOR = 5;

  if (!user.isModified('password')) return next();

  bcrypt.genSalt(SALT_FACTOR, function(err, salt) {
    if (err) return next(err);

    bcrypt.hash(user.password, salt, null, function(err, hash) {
      if (err) return next(err);
      user.password = hash;
      next();
    });
  });
});




userSchema.methods.verifyPassword = function(password, cb) {
  bcrypt.compare(password, this.password, function(err, isVaild) {
    if (err) return cb(err);
    cb(null, isVaild);
  });
};
const User = mongoose.model( ' SignUp', userSchema );

module.exports = User;
