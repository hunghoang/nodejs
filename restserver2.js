var express = require("express");

var app = express();

var routes = require("./routes/routes.js")(app);


var server = app.listen(3000);
console.log("Server listen on 3000 port");
