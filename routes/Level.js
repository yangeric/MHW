var express = require('express');
var router = express.Router();
var dao= require('../routes/DB_Dao');
var util= require('./util');



router.all('/', function(req, res, next) {
  res.render('Level',
   {Detail:[{name:"下位"},{name:"上位"}]
   ,title:"級別(Level)"});
});



module.exports =router;