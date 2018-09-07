"use strict";

let mysql = require("mysql");

/*Inform mysql module about the credentials of the database*/
let connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Achiever1@',
  database: 'MoodleDB'
});

/*Connect database to nodejs. throw err if there is error*/
connection.connect((err) => {
  if(err){
    console.log("Error connecting to MoodleDB database");
    return;
  }else{
    console.log("Connection to database established");
  }
});
