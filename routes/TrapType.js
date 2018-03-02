var express = require('express');
var router = express.Router();
var dao= require('../routes/DB_Dao');
var util= require('./util');




router.all('/', function(req, res, next) {
  res.render('TrapType',
   {Detail:[{name:""}]
   ,title:"陷阱種類(TrapType)"});
});


module.exports =router;