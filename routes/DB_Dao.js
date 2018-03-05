
var myDB = require('./DB_Class');



//查詢
exports.SELECT = function SELECT(Table_Name,callback){
	if(Table_Name == undefined){
		return ;
	}
    var sql = "select * from "+Table_Name;
    console.log(sql);
    myDB.connection.query(sql
    ,function(err, rows, fields) {
    		console.log(rows);
            callback(err,rows,fields);
    });
    myDB.end;
}


//新增
exports.ADD = function Sel(Table_Name,In_Data,callback){
	if(Table_Name == undefined){
		return ;
	}
    //var sql = "INSERT INTO Site (Site_Name) VALUES ('"+In_Data.Site_Name+"')";
    var sql = "INSERT INTO "+Table_Name+" SET ? ";
    console.log(sql);
    var str = myDB.connection.query(sql,In_Data
    ,function(err, rows, fields) {
    console.log(str.sql);
    		if (err) throw err;
            callback(err,rows,fields);
    });
    //console.log(str);
}
//刪除
exports.DELETE = function DELETE(Table_Name,In_Data,callback){
	if(Table_Name == undefined){
		return ;
	}
    var sql = "DELETE "+Table_Name+" SET ?)";
    console.log(sql);
    var str = myDB.connection.query(sql,In_Data
    ,function(err, rows, fields) {
    console.log(str.sql);
    		if (err) throw err;
            callback(err,rows,fields);
    });
    //console.log(str);
}




// //是否已加入
// exports.Is_Join = function Is_Join(bData,callback){
//     var dd = DiaryData(bData);
//     var sql = "select * from Diary_Menber where Diary_Main_Id = '"+dd.getDiary_Id()+"' and Profile_Id = '"+dd.getProfile_Id()+"'";
//     console.log(sql);
//     myDB.connection.query(sql
//         ,function(err, rows, fields) {
//             callback(err,rows,fields);
//         });
// }
// 
// //人數是否超過	(日記id)
// exports.Menber_Count = function Menber_Count(bData,callback){
//     var dd = DiaryData(bData);
//     var sql ="select Diary_Main.Total_Count,(select count(*) from  Diary_Menber where Diary_Menber.Diary_Main_Id = Diary_Main.Diary_Main_Id ) as Menber_Count from Diary_Main where Diary_Main.Diary_Main_Id = '"+dd.getDiary_Id()+"'";
//     console.log(sql);
//     myDB.connection.query(sql
//         ,function(err, rows, fields) {
//         console.log(rows);
//             callback(err,rows,fields);
//         });
// }
// 
// //查詢最愛
// exports.Query_Me = function Query_Me(callback){
//     var sql ="select * from User";
//     console.log("Query_Me :"+sql);
//     myDB.connection.query(sql
//         ,function(err, rows, fields) {
//             callback(err,rows,fields);
//             });
// }
// 
// //查詢全部
// exports.Query_All =  function Query_All(callback){
//     var sql = "select *,(select count(*) from  Diary_Menber where Diary_Menber.Diary_Main_Id = Diary_Main.Diary_Main_Id ) as Menber_Count from Diary_Main";
//     console.log(sql);
//     myDB.connection.query(sql,function(err, rows, fields) {
//                 callback(err,rows,fields);
//     });
// }
// //新增日記
// exports.Add_Diary = function Add_Diary(bData,callback){
//     var dd = DiaryData(bData);
//     var sql = "INSERT INTO Diary_Main(Name, Password, Change_Type,Change_Order,Total_Count,Password_Type,Hide_Type,Now_Order,Create_Profile_Id) VALUES('"+dd.getName()+"','"+dd.getPassword()+"','"+dd.getChange_Type()+"','"+dd.getChange_Order()+"','"+dd.getTotal_Count()+"','"+dd.getPassword_Type()+"','"+dd.getHide_Type()+"','"+dd.getNow_Order()+"','"+dd.getCreate_Profile_Id()+"')";
//     console.log(sql);
//         myDB.connection.query(sql,function(err, rows, fields) {
//                       callback(err,rows,fields);
//                       });
// }
// //新增個人名稱
// exports.Add_User = function Add_User(bData,callback){
//  	var dd = DiaryData(bData);
//     var sql = "INSERT INTO User(User_Name,User_Line_User_Id)VALUES('"+dd.getUser_Name()+"','"+ dd.getUser_Line_User_Id() +"')";
//     console.log(sql);
//     myDB.connection.query(sql,function(err, rows, fields) {
//                           callback(err,rows,fields);
//                           });
// }
// 
// //新增相簿連結
// exports.Add_Album  = function Add_Album(bData,callback){
//  	var dd = DiaryData(bData);
//     var sql = "INSERT INTO Album(Album_Name,Album_Url,Album_Create_User_Id)VALUES('"+dd.getgetAlbum_Name()+"','"+ dd.getgetAlbum_Url() +"','"+dd.getAlbum_Create_User_Id()+"')";
//     console.log(sql);
//     myDB.connection.query(sql,function(err, rows, fields) {
//                           callback(err,rows,fields);
//                           });
// }
// 
// function DiaryData(data){
//     return {
//         getUser_Name : function() {
//         return data.User_Name;
//         },
//         getUser_Line_User_Id : function() {
//         return data.User_Line_User_Id;
//         },
//         getgetAlbum_Name : function(){
//             return data.getAlbum_Name;
//         },
//         getgetAlbum_Url : function(){
//             return data.getAlbum_Url;
//         },
//         getAlbum_Create_User_Id : function(){
//             return data.Album_Create_User_Id;
//         }       
//     }
// }
exports.connection = myDB.connection;
exports.end = myDB.end;