var express = require('express');
var router = express.Router();
var dao= require('../routes/DB_Dao');
var util= require('./util');

//部位
router.all('/', function(req, res, next) {
		dao.SELECT("Site",function(err, rows, fields){
		console.log(rows);
			util.out_print(res,"部位(Site)",'Site',rows);
		});
});


router.all('/ADD', function(req, res, next) {
	var In_Data = {};
	console.log(req.body.Site_Name);
	In_Data['Site_Name'] = req.body.Site_Name;
	dao.ADD("Site",In_Data,function(err, rows, fields){
		dao.SELECT("Site",function(err, rows, fields){
			util.out_print(res,"部位(Site)",'Site',rows);
		});
	});
});

router.all('DEL', function(req, res, next) {
	var In_Data = {};
	console.log(req.body.Site_Name);
	In_Data['Site_Name'] = req.body.Site_Name;
	dao.DELETE("Site",In_Data,function(err, rows, fields){
		dao.SELECT("Site",function(err, rows, fields){
			util.out_print(res,"部位(Site)",'Site',rows);
		});
	});
});
dao.end;
module.exports = router;
