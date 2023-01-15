
require('dotenv').config({path: __dirname + '/.env'})
const express = require("express");
const port = process.env.PORT;
const cors = require("cors");
const _ = require("lodash");
const bodyParser = require("body-parser");
const db = require("./app/models");
const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({origin: ['http://localhost:3000', 'http://localhost:8080']}))

db.sequelize.sync()
	.then(() => {
		console.log("Synced db.");
	})
	.catch((err) => {
		console.log("Failed to sync db: " + err.message);
	});

require("./app/routes/user.routes")(app);
require("./app/routes/bookedFlights.routes")(app);
require("./flight-api/routes/")(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
