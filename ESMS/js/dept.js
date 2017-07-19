$(function(){
	$('.hide_adddiv').remove();
	dept();
});


function dept(){
	/*--------------------------------------------------------------------------------------------------------------------------------*/
	$('.li_dept_manage').on('click',function(){
		$('.hide_adddiv').remove();
		var loginUrl = 'dept/query';
		var deptcondition="";
		var param = {
				query: deptcondition
		};
		// param = JSON.stringify(param);
		publicDom.post(loginUrl,param,function(response){
				if (response.code == 1001) {
					$('.dept_manage_div').append("<div class='panel panel-default hide_adddiv adddiv_querydept'>"+
						"<div class='panel-heading'>部门信息</div>"+
						"<table class='table addtr_querydept'>"+
						"<tbody><tr><th>编号</th><th>名称</th><th>所在地</th></tr></tbody>"+	
						"</table></div>");
					var dept = response.data;
					for( var i=0;i < dept.length;i++ ){
						$('.addtr_querydept').append(
							"<tr><td>"+dept[i].deptno+"</td><td>"+dept[i].dname+"</td><td>"+dept[i].loc+"</td></tr>");
					}
					
				}
				else {
					layer.msg('错误');
				}
			},function(err){
				layer.msg('错误');
			});
	});
	$('.choseQuerydept').on('click',function(){
		$('.hide_adddiv').remove();
		var loginUrl = 'dept/query';
		var deptcondition="";
		var param = {
				query: deptcondition
		};
		// param = JSON.stringify(param);
		publicDom.post(loginUrl,param,function(response){
				if (response.code == 1001) {
					$('.dept_manage_div').append("<div class='panel panel-default hide_adddiv adddiv_querydept'>"+
						"<div class='panel-heading'>部门信息</div>"+
						"<table class='table addtr_querydept'>"+
						"<tbody><tr><th>编号</th><th>名称</th><th>所在地</th></tr></tbody>"+	
						"</table></div>");
					var dept = response.data;
					for( var i=0;i < dept.length;i++ ){
						$('.addtr_querydept').append(
							"<tr><td>"+dept[i].deptno+"</td><td>"+dept[i].dname+"</td><td>"+dept[i].loc+"</td></tr>");
					}
					
				}
				else {
					layer.msg('错误');
				}
			},function(err){
				layer.msg('错误');
			});
	});
	

/*----------------------------------------------------------------------------查询部门-------------------------------------------*/
	$('.btn_query_dept').click(function(){
		$('.hide_adddiv').remove();
		
		var deptcondition = $('.get_deptcondition').val();
		var loginUrl = 'dept/query';
		if($('.get_deptcondition').val()==""){
			layer.msg('查询条件不能为为空！',function(){
				return false;
			});
			return false;
		};
		/*console.log(user_name);
		console.log(user_password);*/
		var param = {
				query: deptcondition
		};
		// param = JSON.stringify(param);
		publicDom.post(loginUrl,param,function(response){
				if (response.code == 1001) {
					$('.dept_manage_div').append("<div class='panel panel-default hide_adddiv adddiv_querydept'>"+
						"<div class='panel-heading'>部门信息</div>"+
						"<table class='table addtr_querydept'>"+
						"<tbody><tr><th>编号</th><th>名称</th><th>所在地</th></tr></tbody>"+	
						"</table></div>");
					var dept = response.data;
					for( var i=0;i < dept.length;i++ ){
						$('.addtr_querydept').append(
							"<tr><td>"+dept[i].deptno+"</td><td>"+dept[i].dname+"</td><td>"+dept[i].loc+"</td></tr>");
					}
					
				}
				else {
					layer.msg('错误');
				}
			},function(err){
				layer.msg('错误');
			});
	})


/*-------------------------------------------------------增加部门------------------------------------------*/
	$('.btn_add_dept').click(function(){
		$('.hide_adddiv').remove();
		var deptno = $('.get_deptno').val();
		var dname = $('.get_dname').val();
		var loc = $('.get_loc').val();
		var loginUrl = 'dept/insert';
		if($('.get_deptno').val()==""||$('.get_dname').val()==""||$('.get_loc').val()==""){
			layer.msg('请输入完整的部门信息',function(){
				return false;
			});
			return false;
		};
		if($('.get_deptno').val().length>4){
			layer.msg('部门编号长度不能大于4',function(){
				return false;
			});
			return false;
		};
		/*console.log(user_name);
		console.log(user_password);*/
		var param = {
				deptno: deptno,
				dname: dname,
				loc: loc
		};
		// param = JSON.stringify(param);
		publicDom.post(loginUrl,param,function(response){
				if (response.code == 1001) {
					layer.msg('添加成功');
					$('.dept_manage_div').append("<div class='panel panel-default hide_adddiv adddiv_querydept'>"+
						"<div class='panel-heading'>部门信息</div>"+
						"<table class='table addtr_querydept'>"+
						"<tbody><tr><th>编号</th><th>名称</th><th>所在地</th></tr></tbody>"+	
						"</table></div>");
					var dept = response.data;
					for( var i=0;i < dept.length;i++ ){
						$('.addtr_querydept').append(
							"<tr><td>"+dept[i].deptno+"</td><td>"+dept[i].dname+"</td><td>"+dept[i].loc+"</td></tr>");
					}
				}
				else {
					layer.msg('错误');
				}
			},function(err){
				layer.msg('错误');
			});
	})
}