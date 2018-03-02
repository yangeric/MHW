var express = require('express');
var router = express.Router();
var dao= require('../routes/DB_Dao');
var util= require('./util');


router.all('/', function(req, res, next) {
  res.render('AttriType',
   {Detail:[{name:""}]
   ,title:"屬性種類(AttriType)"});
});


module.exports = router;
