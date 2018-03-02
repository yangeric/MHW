var express = require('express');
var router = express.Router();
var dao= require('../routes/DB_Dao');
var util= require('./util');

//部位
router.all('/', function(req, res, next) {
  		var In_Data = [];
		In_Data.Positon_Name ="";
		dao.Sel_Position(In_Data,function(err, rows, fields){
			util.out_print(res,"部位(Position)",'Position',rows);
		});
});


module.exports = router;
