"use strict";

let http = require("http");
let express = require("express");
let app = express();
let fs = require("fs");
let path = require("path");

console.log("Server Started");
console.log(__dirname);

/*convert bootstrap from static to dynamic*/
app.use('/CSS', express.static('node_modules/bootstrap/dist/css'));
//convert images to dynamic
app.use('/IMAGES', express.static('assets/images'));
//convert self css to dynamic
app.use('/STYLE', express.static('assets/style'));
/*
create a server for the app
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
//Port command
app.listen(8000);
