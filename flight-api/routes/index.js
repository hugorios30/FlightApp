module.exports = app => {
    const { getPlaceInfo, getAirportNearby, getFlightInfo } = require("../place.js");
  
    var router = require("express").Router();
  
    router.get("/place", getPlaceInfo);
    router.get('/airport-nearby', getAirportNearby)
    router.get('/flight', getFlightInfo)
  
    app.use('/api/v1', router);
  };