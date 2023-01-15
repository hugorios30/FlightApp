const db = require("../models");
const BookedFlight = db.bookedFlights;
const Op = db.Sequelize.Op;

// Create and Save a new BookedFlight
exports.create = (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
    // Validate request
    const { flight_id, from_to, date, time, price, user_email} = req.body;
    if (!flight_id || !from_to || !date || !time || !price || !user_email) {
        res.status(400).send({
          message: "A field cannot be empty"
        });
        return;
      }
    
      const bookedFlight = {
        flight_id,
        from_to,
        date,
        time,
        price,
        user_email,
    };
    
      // Save user in the database
      BookedFlight.create(bookedFlight)
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating the bookedFlight."
          });
        });
};

// Find a single BookedFlight with an email
exports.findAll = (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
    const email = req.body.email;

  BookedFlight.findAll({where: {user_email: email}})
    .then(data => {
        console.log(data)
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find BookedFlight with email=${email}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving BookedFlight with email=" + email,
        msg: err.message
      });
    });
};
