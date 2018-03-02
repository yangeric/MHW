


//共用輸出模板
exports.out_print= function out_print(res,title_name,url,rows,Out_Data){
			//是否有額外資料 直接json型態傳入Out_Data
			if(Out_Data == undefined){
				Out_Data = {};
			}
			var jsonstring=JSON.stringify(rows);
			var data =  JSON.parse(jsonstring);
			Out_Data['Detail']=data;
			Out_Data['title']=title_name;
			console.log(Out_Data);
			res.render(url,Out_Data);
}