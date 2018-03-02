var express = require('express');
var router = express.Router();
var util= require('./util');


/* GET home page. */
router.all('/', function(req, res, next) {
  res.render('index', { title: '' });
});

module.exports = router;
