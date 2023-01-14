const db = require("../models");
const User = db.users;
const Op = db.Sequelize.Op;

// Create and Save a new User
exports.create = (req, res) => {
    // Validate request
    if (!req.body.name || !req.body.email || !req.body.password) {
        res.status(400).send({
          message: "A field cannot be empty"
        });
        return;
      }
    
      const user = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      };
    
      // Save user in the database
      User.create(user)
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating the user."
          });
        });
};

// Find a single User with an email
exports.findOne = (req, res) => {
  console.log(req.data, req.body)
    const email = req.body.email;

  User.findOne({where: {email: email}})
    .then(data => {
        console.log(data)
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find User with email=${email}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving User with email=" + email,
        msg: err.message
      });
    });
};
