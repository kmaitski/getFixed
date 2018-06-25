const bCrypt = require('bcrypt-nodejs');

console.log('PASSPORT MODULE REQUIRED SUCCESSFULLY');

module.exports = function(passport, user) {
  let LocalStrategy = require('passport-local').Strategy;
  let User = user;
  passport.serializeUser((user, done) => {
    console.log('serializeUser', user);
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    console.log('deserializeUser', user);
    User.findById(id).then(function(user) {
      if (user) {
        console.log('deserializeUser if user', user);
        done(null, user.get());
      } else {
        console.log('deserializeUser else user', user);
        done(user.errors, null);
      }
    });
  });
  passport.use(
    'local-signup',
    new LocalStrategy(
      {
        usernameField: 'username',
        passwordField: 'password',
        passReqToCallback: true
      },
      function(req, username, password, done) {
        console.log('got into local-signup', username, password);
        var generateHash = function(password) {
          return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
        };

        User.findOne({ where: { username: username } }).then(user => {
          if (user) {
            return done(null, false, {
              message: 'That username is already taken'
            });
          } else {
            var hashPassword = generateHash(password);
            var data = {
              username: username,
              password: hashPassword,
              email: req.body.email,
              city: req.body.city
            };
            User.create(data).then(function(newUser, created) {
              if (!newUser) {
                return done(null, false);
              }
              if (newUser) {
                return done(null, newUser);
              }
            });
          }
        });
      }
    )
  );
  passport.use(
    'local-login',
    new LocalStrategy(
      {
        usernameField: 'username',
        passwordField: 'password',
        passReqToCallback: true
      },

      function(req, username, password, done) {
        var isValidPassword = function(userpass, password) {
          return bCrypt.compareSync(password, userpass);
        };
        User.findOne({ where: { username } })
          .then(user => {
            console.log(user);
            if (!user) {
              return done(null, false);
            }
            if (!isValidPassword(user.password, password)) {
              return done(null, false);
            }
            var userinfo = user.get();
            return done(null, userinfo);
          })
          .catch(err => {
            console.log('Error:', err);
            return done(null, false);
          });
      }
    )
  );
};
