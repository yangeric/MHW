var express = require('express');
var router = express.Router();
var dao= require('../routes/DB_Dao');
var util= require('./util');

router.all('/', function(req, res, next) {
  res.render('ItemType',
   {Detail:[{name:""}]
   ,title:"道具種類(ItemType)"});
});



module.exports =router;