var express = require('express');
var router = express.Router();
var dao= require('../routes/DB_Dao');
var util= require('./util');




router.all('/', function(req, res, next) {
  res.render('StrippedType',
   {Detail:[{name:""}]
   ,title:"剝取(StrippedType)"});
});



module.exports =router;