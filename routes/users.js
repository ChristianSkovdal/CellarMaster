var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  //res.send('respond with a resource');


  var sql = require("mssql");

  // config for your database
  var config = {
    user: 'beerhere_admin',
    password: 'Wolroy501',
    server: 'mi3-wsq3.a2hosting.com',
    database: 'beerhere_web'
  };

  res.send('Hello!');

  return;

  // connect to your database
  sql.connect(config, function (err) {

    if (err)
      console.log(err);

    res.send('Hello!');

    // create Request object
    // var request = new sql.Request();

    // // query to the database and get the records
    // request.query('select * from Student', function (err, recordset) {

    //   if (err) console.log(err)

    //   // send records as a response
    //   res.send(recordset);

    //});
  });
});

module.exports = router;
