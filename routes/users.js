var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {

  try {
    const sqlite3 = require('sqlite3');

    let db = new sqlite3.Database('./data/celLman.db', (err) => {
      if (err) {
        throw err;
      }

      let sql = `SELECT DISTINCT name FROM users`;

      db.all(sql, [], (err, rows) => {
        if (err) {
          throw err;
        }

        let r = '';
        rows.forEach((row) => {
          r += row.name + '<br>'
        });
        res.send(r);
      });

    });
    
  } catch (error) {
    res.send(error);
  }


});

module.exports = router;
