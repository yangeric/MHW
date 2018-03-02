var express = require('express');
var router = express.Router();
var dao= require('../routes/DB_Dao');
var util= require('./util');



router.all('/', function(req, res, next) {
  res.render('MonsterType',
   {Detail:[{name:"獸龍種",type:"大型"},{name:"牙龍種",type:"大型"}]
   ,title:"魔物類型(MonsterType)"});
});



module.exports =router;