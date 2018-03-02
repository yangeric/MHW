var express = require('express');
var router = express.Router();
var dao= require('../routes/DB_Dao');
var util= require('./util');



router.all('/', function(req, res, next) {
  res.render('MonsterDetail',
   {Detail:[{name:'土砂龍',level:"大型",monsterType:"獸龍種"},
   {name:'恐暴龍',level:"大型",monsterType:"獸龍種"}]
   ,title:"魔物(MonsterDetail)"});
});


module.exports =router;