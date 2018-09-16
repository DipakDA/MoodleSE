"use strict";

module.exports = function(app) {
  app.get('/', createSrvr);
  function createSrvr(req, res){
    res.render('pages/loginpage');
    //res.write('../login/loginpage.html')
    };

  /*the login page which is a POST method*/
  app.post('/my', loginProtocol);
  function loginProtocol(req, res){
    res.render('pages/my');
  }
}




/*Get data from Database can be used later on
database.query('SELECT * FROM courses', (err, rows) => {
  if(err) throw err;
  console.log("Select query successful");
  console.log(rows);
});
*/
