"use strict";

let http = require("http");
let express = require("express");
let app = express();
let fs = require("fs");
let path = require("path");
let bodyParser = require("body-parser");
let database = require('./Database/courseConnectionToDatabase.js')

console.log("Server Started");
//console.log(__dirname);

//convert the POST data to json file for parsing to page
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());


/*Set the view engine to EJS for rendering*/
/*app.set('view engine', 'ejs');
*/

/*convert bootstrap from static to dynamic*/
app.use('/CSS', express.static('node_modules/bootstrap/dist/css'));
//convert images to dynamic
app.use('/IMAGES', express.static('assets/images'));
//convert self css to dynamic
app.use('/STYLE', express.static('assets/style'));

/*create a server for the app
req = request
res = response
*/
app.get('/', createSrvr);
function createSrvr(req, res){
  fs.readFile(__dirname + '/login/loginpage.html', function(err, data){
    res.writeHead(200, "Login Page");
    res.write(data);
    res.end();
  });
};

/*the login page which is a POST method*/
app.post('/login', loginProtocol);
function loginProtocol(req, res){
  res.write(req.body.username);
  res.end();
}

/*Get data from Database can be used later on
database.query('SELECT * FROM courses', (err, rows) => {
  if(err) throw err;
  console.log("Select query successful");
  console.log(rows);
});
*/
//Port command
app.listen(8000);
