var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end(index);
});

module.exports = router;
