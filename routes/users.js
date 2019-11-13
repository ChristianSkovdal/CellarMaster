var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {

  try {
    const sqlite3 = require('sqlite3');

    let db = new sqlite3.Database('./data/celLman.db', (err) => {
      if (err) {
        res.send(err.message);
      }
      console.log('Connected to the CELLMAN database.');
  
  
    });
    res.send('DONE!');
  } catch (error) {
    res.send(error);
  }


});

module.exports = router;
