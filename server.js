var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var setupRoutes = require("./app/routing/routes.js");

var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static(path.join(__dirname, 'app/public')));

setupRoutes(app, express);

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
