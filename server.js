// Dependencies
require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");

// Setting the port to be the default port on host OR 8080
const port = process.env.PORT || 8080;

// Defining an Express server variable
const app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: true
}));

// parse application/json
app.use(bodyParser.json());

// Setup Handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
const routes = require("./controllers/burgers_controller.js");

// Telling the server to use the controller logic file for route handling.
app.use(routes);

// Start our server so that it can begin listening to client requests.
app.listen(port, function () {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + port);
});