let express = require('express');
let server = express();
let cores = require("cors");
let bodyparser = require("body-parser");
var User = require('./models/signupSceema');
var Usercatigories = require('./models/catigoriesSceema')
let UserForgot = require('./models/forgotSceema');
let config = require('./db/configuser');
let cookiesparser = require('cookie-parser');
let session = require('express-session');
var bcrypt = require('bcrypt-nodejs');
var nodemailer = require('nodemailer');
var async = require('async');
var crypto = require('crypto');
var flash = require('express-flash');
server.use(flash());
var upload = require('./db/multerImage');
var path = require('path');
let LocalStrategy = require('passport-local').Strategy;
var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;
var xoauth2 = require('xoauth2');

// MiddleWare
server.use(cores());


server.use(bodyparser.urlencoded({ extended: true }))
server.use(bodyparser.json())
server.use(cookiesparser());
server.use(session({ secret: '1212' }))
server.use(passport.initialize());
server.use(passport.session());

//Facebook Autantication
passport.use(new FacebookStrategy({
  clientID: 287813738753976,
  clientSecret: 'ce6f7f5dcbd8b59074b1af454b788180',
  callbackURL: "http://localhost:8000/auth/facebook/callback"
},
  function (accessToken, refreshToken, profile, done) {
    // User.findOrCreate(..., function(err, user) {
    //   if (err) { return done(err); }
    //   done(null, user);
    // });
  }
));

// Facebook Routes
server.get('/auth/facebook',
  passport.authenticate('facebook'));

// server.get('/auth/facebook/callback',
//   passport.authenticate('facebook', {
//     successRedirect: '/dashboard',
//     failureRedirect: '/'
//   }))

passport.use(new LocalStrategy((username, password, next) => {

  User.findOne({ email: username }, (err, user) => {

    if (err) { return next(err) }
    if (!user) { return next(null, false) }
    user.verifyPassword(password, (err, isValid) => {
      if (err) { return next(err) }
      if (!isValid) { return next(null, false) }
      next(null, user)

    })

  })
}));

passport.serializeUser((user, next) => {
  next(null, user.id)

});
passport.deserializeUser((id, next) => {
  var user = user.find((user) => {
    return user.id === id;
  })
  next(null, user);
})





//Sign up Root
server.post("/sign_up_user", (req, res) => {

  let myuser = new User({ email: req.body.email, password: req.body.password, name: req.body.name, fathername: req.body.fathername, typeselected: req.body.typeselected });

  myuser.save((err, user) => {
    if (err) {
      return res.json({ success: false, err: err })
    }
    res.json({ success: true, data: user })
  });

})

//login Root
server.post("/loginUer", (req, res, next) => {


  passport.authenticate('local', function (err, user) {

    if (user) {

      req.login(user, function () {
        res.json(user)
      });

    } else {
      res.json(null);
    }

  })(req, next);

})
//catigorious 

server.use(upload.single('photo'));
server.post("/catgories", (req, res, next) => {



  let myusernew = new Usercatigories({ email: req.body.email, CompanyName: req.body.CompanyName, price: req.body.price, productName: req.body.productName, order: req.body.order, typeselected: req.body.typeselected, photoname: req.file.filename, Description: req.body.Description });

  myusernew.save((err, user) => {
    if (err) {
      return res.json({ success: false, err: err })
    }

    res.json({ success: true, data: user })
  });

})

server.use(express.static('./uploads'));
//show Catigorious
server.get("/CatigorieShow", (req, res) => {
  let showuser = new Usercatigories();
  Usercatigories.find({}, (err, userget) => {
    if (err) {
      return res.json({ success: false, err: err })
    }

    res.json({ success: true, data: userget })
  })


})

//SHow AgricultureCatigories
server.get("/agricultureandFoodshow", (req, res) => {
  let showuser = new Usercatigories();
  Usercatigories.find({ typeselected: "Agriculture & Food" }, (err, userget) => {
    if (err) {
      return res.json({ success: false, err: err })
    }

    res.json({ success: true, data: userget })
  })


})


  //Search Catigories 
  server.post("/searchdata", (req, res) => {
    let searchdata = req.body.searchCatigoires
    Usercatigories.find({productName:searchdata }, (err, searchdata) => {
      if (err) {
        return res.json({ success: false, err: err })
      }

      res.json({ success: true, data: searchdata })
    })

  })
  //DetailRouter
  server.get("/detailrouter/:myid", (req, res) => {
    let showuser = new Usercatigories();
    Usercatigories.findById({ _id: req.params.myid }, (err, userget) => {
      if (err) {
        return res.json({ success: false, err: err })
      }
  
      res.json({ success: true, data: userget })
    })
  
  })
  //logout post
  server.get('/logout', function (req, res) {
    req.logout();
    res.json({ success: true })

  });

  // Forgot   Post 
  server.post('/forgot', function (req, res, next) {
    async.waterfall([
      function (done) {
        crypto.randomBytes(20, function (err, buf) {
          var token = buf.toString('hex');
          done(err, token);
        });
      },
      function (token, done) {
        var userForgot = new UserForgot();

        userForgot.resetPasswordToken = token;
        userForgot.resetPasswordExpires = Date.now() + 3600000;
        userForgot.email = req.body.email;

        userForgot.save(function (err) {
          done(err, token, userForgot);
        });

      },
      function (token, userForgot, done) {
        var smtpTransport = nodemailer.createTransport({
          host: "smtp.gmail.com",
          port: 587,
          secure: false,
          auth: {
            user: "hamadali771150333@gmail.com",
            pass: "muhammadhamaddogar234"
          }
        });

        var mailOptions = {
          to: userForgot.email,
          from: 'hamadali771150333@gmail.com',
          subject: 'Node.js Password Reset',
          text: 'You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n' +
            'Please click on the following link, or paste this into your browser to complete the process:\n\n' +
            'http://localhost:3000/reset/' + token + '\n\n' +
            'If you did not request this, please ignore this email and your password will remain unchanged.\n'
        };
        smtpTransport.sendMail(mailOptions, function (err) {
          res.json('Your e-mail Successfully  has been  sent to ' + userForgot.email + '');
          done(err, 'done');
        });
      }
    ], function (err) {
      if (err) return next(err);
      res.redirect('/forgot');
    });
  });



  //ResET  Password
  server.post('/resetpassword/:token', function (req, res) {

    UserForgot.findOne({ resetPasswordToken: req.params.token, resetPasswordExpires: { $gt: Date.now() } }, function (err, user) {
      if (user) {
        User.findOneAndUpdate({ email: user.email }, { password: req.body.password }, function (err, user) {

          if (user) {

            res.json(user);

          }
          else {
            res.json(err)
          }

        })
      }

    });
  });


  // server.use(express.static('./build'))





  server.listen(8000, () => console.log("server is Running"));