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
						"<div class='panel-heading'>工资项目信息</div>"+
						"<table class='table'>"+
						"<tbody class='addtr_querysalproject'><tr><th>工资项目编号</th><th>工资项目名称</th><th>事件</th><th>操作</th>"+
						"<th>系数</th>"+	
						"</tr></tbody></table></div>");
					var salproject = response.data;
					for( var i=0;i < salproject.length;i++ ){
						var action='';
						switch(salproject[i].leftOperand){
							case 0:
								action='基本工资';break;
							case 1:
								action='公司代付';break;
							case 2:
								action='病假';break;
							case 3:
								action='事假';break;
							case 4:
								action='迟到';break;
							case 5:
								action='早退';break;
							case 6:
								action='旷工';break;
							case 7:
								action='加班';break;
							case 8:
								action='奖金';break;
							default: action ='';
						}
						$('.addtr_querysalproject').append(
							"<tr><td>"+salproject[i].ind+"</td><td>"+salproject[i].name+"</td><td>"+action+"</td>"+
							"<td>"+salproject[i].operator+"<td>"+salproject[i].rightOperand+"</td><tr>"
							);
					}
					
				}
				else {
					layer.msg('输入数据有误');
				}
			},function(err){
				layer.msg('请求失败');
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
						"<div class='panel-heading'>工资项目信息</div>"+
						"<table class='table'>"+
						"<tbody class='addtr_querysalproject'><tr><th>工资项目编号</th><th>工资项目名称</th><th>事件</th><th>操作</th>"+
						"<th>系数</th>"+	
						"</tr></tbody></table></div>");
					var salproject = response.data;
					for( var i=0;i < salproject.length;i++ ){
						var action='';
						switch(salproject[i].leftOperand){
							case 0:
								action='基本工资';break;
							case 1:
								action='公司代付';break;
							case 2:
								action='病假';break;
							case 3:
								action='事假';break;
							case 4:
								action='迟到';break;
							case 5:
								action='早退';break;
							case 6:
								action='旷工';break;
							case 7:
								action='加班';break;
							case 8:
								action='奖金';break;
							default: action ='';
						}
						$('.addtr_querysalproject').append(
							"<tr><td>"+salproject[i].ind+"</td><td>"+salproject[i].name+"</td><td>"+action+"</td>"+
							"<td>"+salproject[i].operator+"<td>"+salproject[i].rightOperand+"</td><tr>"
							);
					}
					
				}
				else {
					layer.msg('输入数据有误');
				}
			},function(err){
				layer.msg('请求失败');
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
						"<div class='panel-heading'>工资项目信息</div>"+
						"<table class='table'>"+
						"<tbody class='addtr_querysalproject'><tr><th>工资项目编号</th><th>工资项目名称</th><th>事件</th><th>操作</th>"+
						"<th>系数</th>"+	
						"</tr></tbody></table></div>");
					var salproject = response.data;
					for( var i=0;i < salproject.length;i++ ){
						var action='';
						switch(salproject[i].leftOperand){
							case 0:
								action='基本工资';break;
							case 1:
								action='公司代付';break;
							case 2:
								action='病假';break;
							case 3:
								action='事假';break;
							case 4:
								action='迟到';break;
							case 5:
								action='早退';break;
							case 6:
								action='旷工';break;
							case 7:
								action='加班';break;
							case 8:
								action='奖金';break;
							default: action ='';
						}
						$('.addtr_querysalproject').append(
							"<tr><td>"+salproject[i].ind+"</td><td>"+salproject[i].name+"</td><td>"+action+"</td>"+
							"<td>"+salproject[i].operator+"<td>"+salproject[i].rightOperand+"</td><tr>"
							);
					}
					
				}
				else {
					layer.msg('输入数据有误');
				}
			},function(err){
				layer.msg('请求失败');
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
						"<div class='panel-heading'>工资项目信息</div>"+
						"<table class='table'>"+
						"<tbody class='addtr_querysalproject'><tr><th>工资项目编号</th><th>工资项目名称</th><th>事件</th><th>操作</th>"+
						"<th>系数</th>"+	
						"</tr></tbody></table></div>");
					var salproject = response.data;
					for( var i=0;i < salproject.length;i++ ){
						var action='';
						switch(salproject[i].leftOperand){
							case 0:
								action='基本工资';break;
							case 1:
								action='公司代付';break;
							case 2:
								action='病假';break;
							case 3:
								action='事假';break;
							case 4:
								action='迟到';break;
							case 5:
								action='早退';break;
							case 6:
								action='旷工';break;
							case 7:
								action='加班';break;
							case 8:
								action='奖金';break;
							default: action ='';
						}
						$('.addtr_querysalproject').append(
							"<tr><td>"+salproject[i].ind+"</td><td>"+salproject[i].name+"</td><td>"+action+"</td>"+
							"<td>"+salproject[i].operator+"<td>"+salproject[i].rightOperand+"</td><tr>"
							);
					}
					
				}
				else {
					layer.msg('输入数据有误');
				}
			},function(err){
				layer.msg('请求失败');
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
						"<div class='panel-heading'>工资项目信息</div>"+
						"<table class='table'>"+
						"<tbody class='addtr_querysalproject'><tr><th>工资项目编号</th><th>工资项目名称</th><th>事件</th><th>操作</th>"+
						"<th>系数</th>"+	
						"</tr></tbody></table></div>");
					var salproject = response.data;
					for( var i=0;i < salproject.length;i++ ){
						var action='';
						switch(salproject[i].leftOperand){
							case 0:
								action='基本工资';break;
							case 1:
								action='公司代付';break;
							case 2:
								action='病假';break;
							case 3:
								action='事假';break;
							case 4:
								action='迟到';break;
							case 5:
								action='早退';break;
							case 6:
								action='旷工';break;
							case 7:
								action='加班';break;
							case 8:
								action='奖金';break;
							default: action ='';
						}
						$('.addtr_querysalproject').append(
							"<tr><td>"+salproject[i].ind+"</td><td>"+salproject[i].name+"</td><td>"+action+"</td>"+
							"<td>"+salproject[i].operator+"<td>"+salproject[i].rightOperand+"</td><tr>"
							);
					}
					
				}
				else {
					layer.msg('输入数据有误');
				}
			},function(err){
				layer.msg('请求失败');
			});
	});

	/*-----------------------------------------------------------查询--------------------------------------------------*/
	$('.btn_query_salproject').click(function(){
		$('.hide_adddiv').remove();
		var queryUrl= 'calculateItem/query';
		var projectno=$('.queryproject_get_projectno').val();
		var pname=$('.queryproject_get_pname').val();
		var param={
			ind:projectno,
			name:pname
		}
		publicDom.post(queryUrl,param,function(response){
				if (response.code == 1001) {
					$('.salproject_manage_div').append("<div class='panel panel-default hide_adddiv adddiv_querysalproject'>"+
						"<div class='panel-heading'>工资项目信息</div>"+
						"<table class='table'>"+
						"<tbody class='addtr_querysalproject'><tr><th>工资项目编号</th><th>工资项目名称</th><th>事件</th><th>操作</th>"+
						"<th>系数</th>"+	
						"</tr></tbody></table></div>");
					var salproject = response.data;
					for( var i=0;i < salproject.length;i++ ){
						var action='';
						switch(salproject[i].leftOperand){
							case 0:
								action='基本工资';break;
							case 1:
								action='公司代付';break;
							case 2:
								action='病假';break;
							case 3:
								action='事假';break;
							case 4:
								action='迟到';break;
							case 5:
								action='早退';break;
							case 6:
								action='旷工';break;
							case 7:
								action='加班';break;
							case 8:
								action='奖金';break;
							default: action ='';
						}
						$('.addtr_querysalproject').append(
							"<tr><td>"+salproject[i].ind+"</td><td>"+salproject[i].name+"</td><td>"+action+"</td>"+
							"<td>"+salproject[i].operator+"<td>"+salproject[i].rightOperand+"</td><tr>"
							);
					}
					
				}
				else {
					layer.msg('输入数据有误');
				}
			},function(err){
				layer.msg('请求失败');
			});
	});

/*-----------------------------------------------------------增加--------------------------------------------------*/
	$('.btn_add_salproject').click(function(){
		$('.hide_adddiv').remove();
		var queryUrl= 'calculateItem/insert';
		var projectno=$('.addproject_get_projectno').val();
		var pname=$('.addproject_get_pname').val();
		var leftOperand=$('.addproject_get_leftOperand').val();
		var operator=$('.addproject_get_operater').val();
		var rightOperand=$('.addproject_get_rightOperand').val();
		var param={
			ind:projectno,
			name:pname,
			leftOperand:leftOperand,
			operator:operator,
			rightOperand:rightOperand
		}
		console.log(param);
		publicDom.post(queryUrl,param,function(response){
			console.log(response.code);
				if (response.code == 1001) {
					$('.salproject_manage_div').append("<div class='panel panel-default hide_adddiv adddiv_querysalproject'>"+
						"<div class='panel-heading'>工资项目信息</div>"+
						"<table class='table'>"+
						"<tbody class='addtr_querysalproject'><tr><th>工资项目编号</th><th>工资项目名称</th><th>事件</th><th>操作</th>"+
						"<th>系数</th>"+	
						"</tr></tbody></table></div>");
					var salproject = response.data;
					for( var i=0;i < salproject.length;i++ ){
						var action='';
						switch(salproject[i].leftOperand){
							case 0:
								action='基本工资';break;
							case 1:
								action='公司代付';break;
							case 2:
								action='病假';break;
							case 3:
								action='事假';break;
							case 4:
								action='迟到';break;
							case 5:
								action='早退';break;
							case 6:
								action='旷工';break;
							case 7:
								action='加班';break;
							case 8:
								action='奖金';break;
							default: action ='';
						}
						$('.addtr_querysalproject').append(
							"<tr><td>"+salproject[i].ind+"</td><td>"+salproject[i].name+"</td><td>"+action+"</td>"+
							"<td>"+salproject[i].operator+"<td>"+salproject[i].rightOperand+"</td><tr>"
							);
					}
					
				}
				else {
					layer.msg('输入数据有误');
				}
			},function(err){
				layer.msg('请求失败');
			});
	});

/*-----------------------------------------------------------修改--------------------------------------------------*/
	$('.btn_update_salproject').click(function(){
		$('.hide_adddiv').remove();
		var queryUrl= 'calculateItem/update';
		var projectno=$('.updateproject_get_projectno').val();
		var pname=$('.updateproject_get_pname').val();
		var leftOperand=$('.updateproject_get_leftOperand').val();
		var operator=$('.updateproject_get_operater').val();
		var rightOperand=$('.updateproject_get_rightOperand').val();
		var param={
			ind:projectno,
			name:pname,
			leftOperand:leftOperand,
			operator:operator,
			rightOperand:rightOperand
		}
		publicDom.post(queryUrl,param,function(response){
				if (response.code == 1001) {
					$('.salproject_manage_div').append("<div class='panel panel-default hide_adddiv adddiv_querysalproject'>"+
						"<div class='panel-heading'>工资项目信息</div>"+
						"<table class='table'>"+
						"<tbody class='addtr_querysalproject'><tr><th>工资项目编号</th><th>工资项目名称</th><th>事件</th><th>操作</th>"+
						"<th>系数</th>"+	
						"</tr></tbody></table></div>");
					var salproject = response.data;
					for( var i=0;i < salproject.length;i++ ){
						var action='';
						switch(salproject[i].leftOperand){
							case 0:
								action='基本工资';break;
							case 1:
								action='公司代付';break;
							case 2:
								action='病假';break;
							case 3:
								action='事假';break;
							case 4:
								action='迟到';break;
							case 5:
								action='早退';break;
							case 6:
								action='旷工';break;
							case 7:
								action='加班';break;
							case 8:
								action='奖金';break;
							default: action ='';
						}
						$('.addtr_querysalproject').append(
							"<tr><td>"+salproject[i].ind+"</td><td>"+salproject[i].name+"</td><td>"+action+"</td>"+
							"<td>"+salproject[i].operator+"<td>"+salproject[i].rightOperand+"</td><tr>"
							);
					}
					
				}
				else {
					layer.msg('输入数据有误');
				}
			},function(err){
				layer.msg('请求失败');
			});
	});

/*-----------------------------------------------------------删除--------------------------------------------------*/
	$('.btn_del_salproject').click(function(){
		$('.hide_adddiv').remove();
		var queryUrl= 'calculateItem/delete';
		var projectno=$('.delproject_get_salprojectno').val();
		var param={
			ind:projectno
		}
		publicDom.post(queryUrl,param,function(response){
			console.log(response.code);
				if (response.code == 1001) {
					$('.salproject_manage_div').append("<div class='panel panel-default hide_adddiv adddiv_querysalproject'>"+
						"<div class='panel-heading'>工资项目信息</div>"+
						"<table class='table'>"+
						"<tbody class='addtr_querysalproject'><tr><th>工资项目编号</th><th>工资项目名称</th><th>事件</th><th>操作</th>"+
						"<th>系数</th>"+	
						"</tr></tbody></table></div>");
					var salproject = response.data;
					for( var i=0;i < salproject.length;i++ ){
						var action='';
						switch(salproject[i].leftOperand){
							case 0:
								action='基本工资';break;
							case 1:
								action='公司代付';break;
							case 2:
								action='病假';break;
							case 3:
								action='事假';break;
							case 4:
								action='迟到';break;
							case 5:
								action='早退';break;
							case 6:
								action='旷工';break;
							case 7:
								action='加班';break;
							case 8:
								action='奖金';break;
							default: action ='';
						}
						$('.addtr_querysalproject').append(
							"<tr><td>"+salproject[i].ind+"</td><td>"+salproject[i].name+"</td><td>"+action+"</td>"+
							"<td>"+salproject[i].operator+"<td>"+salproject[i].rightOperand+"</td><tr>"
							);
					}
					
				}
				else {
					layer.msg('输入数据有误');
				}
			},function(err){
				layer.msg('请求失败');
			});
	});



}