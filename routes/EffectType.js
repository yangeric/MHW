var express = require('express');
var router = express.Router();
var dao= require('../routes/DB_Dao');
var util= require('./util');


router.all('/', function(req, res, next) {
  res.render('EffectType',
   {Detail:[{name:"佳",pic:""}]
   ,title:"效果種類(EffectType)"});
});



module.exports = router;
