let express = require('express');
let server = express();
let router = express.Router();
let User = require('../models/signupSceema')
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
  module.exports = router;