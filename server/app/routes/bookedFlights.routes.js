module.exports = app => {
    const bookedFlights = require("../controllers/bookedFlights.controller.js");
  
    var router = require("express").Router();
  
    // Create a new BookedFlight
    router.post("/", bookedFlights.create);

    // Retrieves all BookedFlights from a User email
    router.get("/", bookedFlights.findAll);

  
    app.use('/api/booked-flights', router);
  };