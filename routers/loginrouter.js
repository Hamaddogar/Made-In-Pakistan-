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