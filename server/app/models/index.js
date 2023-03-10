const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const {user, bookedFlight} = require("./user.model.js")(sequelize, Sequelize)
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = user
db.bookedFlights = bookedFlight;

module.exports = db;
