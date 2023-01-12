
const express = require("express");
const port = process.env.PORT || 3000;
const cors = require("cors");
const _ = require("lodash");
const bodyParser = require("body-parser");
const db = require("./app/models");
const app = express();

var corsOptions = {
	origin: "http://localhost:3001"
};

app.use(express.json());
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

db.sequelize.sync()
	.then(() => {
		console.log("Synced db.");
	})
	.catch((err) => {
		console.log("Failed to sync db: " + err.message);
	});

require("./app/routes/user.routes")(app);
require("./app/routes/bookedFlights.routes")(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
