var express = require('express');
var router = express.Router();
const fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  fs.stat('../public/index.html', function(err, stats) {
    if(err){
      throw err;
    }

    res.setHeader('Content-Type','text/html;charset=utf-8');
    res.setHeader('Content-length', stats.size);
    res.sendfile('../public/index.html');
  });
});

module.exports = router;
