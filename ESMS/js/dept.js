$(function(){
	dept();
});


function dept(){
	
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
					layer.msg('错误1');
				}
			},function(err){
				layer.msg('错误2');
			});
	})

	$('.btn_queryall_dept').click(function(){
		$('.hide_adddiv').remove();
		
		var deptcondition = '';
		var loginUrl = 'dept/query';
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
					for( var i=0;i < dept.length -1;i++ ){
						$('.addtr_querydept').append(
							"<tr><td>"+dept[i].deptno+"</td><td>"+dept[i].dname+"</td><td>"+dept[i].loc+"</td></tr>");
					}
					
				}
				else {
					layer.msg('错误1');
				}
			},function(err){
				layer.msg('错误2');
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
					layer.msg('错误1');
				}
			},function(err){
				layer.msg('错误2');
			});
	})

/*----------------------------------------------------------------------------修改部门-------------------------------------------*/
	$('.btn_update_dept').click(function(){
		$('.hide_adddiv').remove();
		var deptno = $('.update_get_deptno').val();
		var dname = $('.update_get_dname').val();
		var loc = $('.update_get_loc').val();
		var updateUrl = 'dept/update';
		if($('.update_get_deptno').val()==""||$('.update_get_dname').val()==""||$('.update_get_loc').val()==""){
			layer.msg('部门信息不能为为空！',function(){
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
		publicDom.post(updateUrl,param,function(response){
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
					layer.msg('错误1');
				}
			},function(err){
				layer.msg('错误2');
			});
	})

/*----------------------------------------------------------------------------修改部门-------------------------------------------*/
	$('.btn_del_dept').click(function(){
		$('.hide_adddiv').remove();
		var deptno = $('.del_get_deptno').val();
		var delUrl = 'dept/delete';
		console.log(deptno);
		if($('.del_get_deptno').val()==""){
			layer.msg('部门编号不能为为空！',function(){
				return false;
			});
			return false;
		};
		console.log(deptno);
		var param = {
				deptno: deptno
		};
		console.log(param);
		// param = JSON.stringify(param);
		publicDom.post(delUrl,param,function(response){
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
					layer.msg('错误1');
				}
			},function(err){
				layer.msg('错误2');
			});
	})


	
}
