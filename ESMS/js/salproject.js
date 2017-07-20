$(function(){
	salproject();
});

function salproject(){

	/*-----------------------------------------------------------查询所有--------------------------------------------------*/
	$('.choseQuerysalproject').click(function(){
		$('.hide_adddiv').remove();
		var queryUrl= 'calculateItem/query';
		var projectno='';
		var pname='';
		var param={
			ind:projectno,
			name:pname
		}
		publicDom.post(queryUrl,param,function(response){
				if (response.code == 1001) {
					$('.salproject_manage_div').append("<div class='panel panel-default hide_adddiv adddiv_querysalproject'>"+
						"<div class='panel-heading'>岗位信息</div>"+
						"<table class='table'>"+
						"<tbody class='addtr_querysalproject'><tr><th>工资项目编号</th><th>工资项目名称</th><th>事件</th><th>操作</th>"+
						"<th>系数</th>"+	
						"</tr></tbody></table></div>");
					var salproject = response.data;
					for( var i=0;i < salproject.length;i++ ){
						var action='';
						switch(salproject[i].leftOperand){
							case 0:
								action='基本工资',break;
							case 1:
								action='公司代付',break;
							case 2:
								action='病假',break;
							case 3:
								action='事假',break;
							case 4:
								action='迟到',break;
							case 5:
								action='早退',break;
							case 6:
								action='旷工',break;
							case 7:
								action='加班',break;
							case 8:
								action='奖金',break;
						}
						$('.addtr_querysalproject').append(
							"<tr><td>"+salproject[i].ind+"</td><td>"+salproject[i].name+"</td><td>"+action+"</td>"+
							"<td>"+salproject[i].operator+"<td>"+salproject[i].rightOperand+"</td><tr>"
							);
					}
					
				}
				else {
					layer.msg('错误1');
				}
			},function(err){
				layer.msg('错误2');
			});
	});
	$('.choseAddsalproject').click(function(){
		$('.hide_adddiv').remove();
		var queryUrl= 'calculateItem/query';
		var projectno='';
		var pname='';
		var param={
			ind:projectno,
			name:pname
		}
		publicDom.post(queryUrl,param,function(response){
				if (response.code == 1001) {
					$('.salproject_manage_div').append("<div class='panel panel-default hide_adddiv adddiv_querysalproject'>"+
						"<div class='panel-heading'>岗位信息</div>"+
						"<table class='table'>"+
						"<tbody class='addtr_querysalproject'><tr><th>工资项目编号</th><th>工资项目名称</th><th>事件</th><th>操作</th>"+
						"<th>系数</th>"+	
						"</tr></tbody></table></div>");
					var salproject = response.data;
					for( var i=0;i < salproject.length;i++ ){
						var action='';
						switch(salproject[i].leftOperand){
							case 0:
								action='基本工资',break;
							case 1:
								action='公司代付',break;
							case 2:
								action='病假',break;
							case 3:
								action='事假',break;
							case 4:
								action='迟到',break;
							case 5:
								action='早退',break;
							case 6:
								action='旷工',break;
							case 7:
								action='加班',break;
							case 8:
								action='奖金',break;
						}
						$('.addtr_querysalproject').append(
							"<tr><td>"+salproject[i].ind+"</td><td>"+salproject[i].name+"</td><td>"+action+"</td>"+
							"<td>"+salproject[i].operator+"<td>"+salproject[i].rightOperand+"</td><tr>"
							);
					}
					
				}
				else {
					layer.msg('错误1');
				}
			},function(err){
				layer.msg('错误2');
			});
	});
	$('.choseUpdatesalproject').click(function(){
		$('.hide_adddiv').remove();
		var queryUrl= 'calculateItem/query';
		var projectno='';
		var pname='';
		var param={
			ind:projectno,
			name:pname
		}
		publicDom.post(queryUrl,param,function(response){
				if (response.code == 1001) {
					$('.salproject_manage_div').append("<div class='panel panel-default hide_adddiv adddiv_querysalproject'>"+
						"<div class='panel-heading'>岗位信息</div>"+
						"<table class='table'>"+
						"<tbody class='addtr_querysalproject'><tr><th>工资项目编号</th><th>工资项目名称</th><th>事件</th><th>操作</th>"+
						"<th>系数</th>"+	
						"</tr></tbody></table></div>");
					var salproject = response.data;
					for( var i=0;i < salproject.length;i++ ){
						var action='';
						switch(salproject[i].leftOperand){
							case 0:
								action='基本工资',break;
							case 1:
								action='公司代付',break;
							case 2:
								action='病假',break;
							case 3:
								action='事假',break;
							case 4:
								action='迟到',break;
							case 5:
								action='早退',break;
							case 6:
								action='旷工',break;
							case 7:
								action='加班',break;
							case 8:
								action='奖金',break;
						}
						$('.addtr_querysalproject').append(
							"<tr><td>"+salproject[i].ind+"</td><td>"+salproject[i].name+"</td><td>"+action+"</td>"+
							"<td>"+salproject[i].operator+"<td>"+salproject[i].rightOperand+"</td><tr>"
							);
					}
					
				}
				else {
					layer.msg('错误1');
				}
			},function(err){
				layer.msg('错误2');
			});
	});
	$('.choseDelsalproject').click(function(){
		$('.hide_adddiv').remove();
		var queryUrl= 'calculateItem/query';
		var projectno='';
		var pname='';
		var param={
			ind:projectno,
			name:pname
		}
		publicDom.post(queryUrl,param,function(response){
				if (response.code == 1001) {
					$('.salproject_manage_div').append("<div class='panel panel-default hide_adddiv adddiv_querysalproject'>"+
						"<div class='panel-heading'>岗位信息</div>"+
						"<table class='table'>"+
						"<tbody class='addtr_querysalproject'><tr><th>工资项目编号</th><th>工资项目名称</th><th>事件</th><th>操作</th>"+
						"<th>系数</th>"+	
						"</tr></tbody></table></div>");
					var salproject = response.data;
					for( var i=0;i < salproject.length;i++ ){
						var action='';
						switch(salproject[i].leftOperand){
							case 0:
								action='基本工资',break;
							case 1:
								action='公司代付',break;
							case 2:
								action='病假',break;
							case 3:
								action='事假',break;
							case 4:
								action='迟到',break;
							case 5:
								action='早退',break;
							case 6:
								action='旷工',break;
							case 7:
								action='加班',break;
							case 8:
								action='奖金',break;
						}
						$('.addtr_querysalproject').append(
							"<tr><td>"+salproject[i].ind+"</td><td>"+salproject[i].name+"</td><td>"+action+"</td>"+
							"<td>"+salproject[i].operator+"<td>"+salproject[i].rightOperand+"</td><tr>"
							);
					}
					
				}
				else {
					layer.msg('错误1');
				}
			},function(err){
				layer.msg('错误2');
			});
	});
	$('.li_salproject').click(function(){
		$('.hide_adddiv').remove();
		var queryUrl= 'calculateItem/query';
		var projectno='';
		var pname='';
		var param={
			ind:projectno,
			name:pname
		}
		publicDom.post(queryUrl,param,function(response){
				if (response.code == 1001) {
					$('.salproject_manage_div').append("<div class='panel panel-default hide_adddiv adddiv_querysalproject'>"+
						"<div class='panel-heading'>岗位信息</div>"+
						"<table class='table'>"+
						"<tbody class='addtr_querysalproject'><tr><th>工资项目编号</th><th>工资项目名称</th><th>事件</th><th>操作</th>"+
						"<th>系数</th>"+	
						"</tr></tbody></table></div>");
					var salproject = response.data;
					for( var i=0;i < salproject.length;i++ ){
						var action='';
						switch(salproject[i].leftOperand){
							case 0:
								action='基本工资',break;
							case 1:
								action='公司代付',break;
							case 2:
								action='病假',break;
							case 3:
								action='事假',break;
							case 4:
								action='迟到',break;
							case 5:
								action='早退',break;
							case 6:
								action='旷工',break;
							case 7:
								action='加班',break;
							case 8:
								action='奖金',break;
						}
						$('.addtr_querysalproject').append(
							"<tr><td>"+salproject[i].ind+"</td><td>"+salproject[i].name+"</td><td>"+action+"</td>"+
							"<td>"+salproject[i].operator+"<td>"+salproject[i].rightOperand+"</td><tr>"
							);
					}
					
				}
				else {
					layer.msg('错误1');
				}
			},function(err){
				layer.msg('错误2');
			});
	});

}