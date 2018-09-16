"use strict";

let http = require("http");
let express = require("express");
let app = express();
let routes = require('./routes/index.js');
let fs = require("fs");
let path = require("path");
let bodyParser = require("body-parser");
let database = require('./Database/courseConnectionToDatabase.js')
let port = process.env.PORT || 3000;
let jquery = require('jquery');
let popper = require('popper.js');

//console.log("Server Started");
//console.log(__dirname);

//convert the POST data to json file for parsing to page
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());


/*Set the view engine to EJS for rendering*/
app.set('view engine', 'ejs');

/*convert bootstrap from static to dynamic*/
app.use('/CSS', express.static('node_modules/bootstrap/dist/css'));
app.use('/JS', express.static('node_modules/bootstrap/dist/js'));
app.use('/JQUERY', express.static('node_modules/jquery/dist'));
//app.use('/POPPER', express.static('node_modules/popper.js/dist'));
//convert images to dynamic
app.use('/IMAGES', express.static('assets/images'));
//convert self css to dynamic
app.use('/STYLE', express.static('assets/style'));

/*create a server for the app
req = request
res = response
*/

routes(app);

app.listen(port, function() {
  console.log("Server listening on port" + port + "...");
});
