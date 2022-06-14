const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const register = (req, res, next) => {
  bcrypt.hash(req.body.password, 10, function (err, hashedPass) {
    if (err) {
      console.log(err);
    }
    let user = new User({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      password: hashedPass,
    });
    user
      .save()
      .then((user) => {
        res.json(user);
      })
      .catch((error) => {
        res.json("error occured");
      });
  });
};

const login = (req, res, next) => {
  var username = req.body.username;
  var password = req.body.password;

  User.findOne({ $or: [{ email: username }, { phone: username }] }).then(
    (user) => {
      if (user) {
        bcrypt.compare(password, user.password, function (err, result) {
          if (err) {
            res.json(err);
          }
          if (result) {
            let token = jwt.sign({ name: user.name }, "anythingsecret", {
              expiresIn: "1h",
            });
            res.json(token + " :  login successfull");
          } else {
            res.json("invalid username or password");
          }
        });
      } else {
        res.json("credentials don't match");
      }
    }
  );
};
module.exports = { register, login };
