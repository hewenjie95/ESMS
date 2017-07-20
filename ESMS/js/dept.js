$(function(){
	dept();
});


function dept(){

/*-----------------------------------------------------------------------查询所有-------------------------------------------*/
	$('.choseQuerydept').click(function(){
		$('.hide_adddiv').remove();
		
		var deptcondition = '';
		var queryUrl = 'dept/query';
		var param = {
				query: deptcondition
		};
		publicDom.post(queryUrl,param,function(response){
				if (response.code == 1001) {
					$('.dept_manage_div').append("<div class='panel panel-default hide_adddiv adddiv_querydept'>"+
						"<div class='panel-heading'>部门信息</div>"+
						"<table class='table addtr_querydept'>"+
						"<tbody><tr><th>编号</th><th>名称</th><th>所在地</th></tr></tbody>"+	
						"</table></div>");
					var dept = response.data;
					for( var i=0;i < dept.length ;i++ ){
						$('.addtr_querydept').append(
							"<tr><td>"+dept[i].deptno+"</td><td>"+dept[i].dname+"</td><td>"+dept[i].loc+"</td></tr>");
					}
					
				}
				else {
					layer.msg('输入数据有误');
				}
			},function(err){
				layer.msg('请求失败');
			});
	})
	$('.choseAdddept').click(function(){
		$('.hide_adddiv').remove();
		
		var deptcondition = '';
		var queryUrl = 'dept/query';
		var param = {
				query: deptcondition
		};
		publicDom.post(queryUrl,param,function(response){
				if (response.code == 1001) {
					$('.dept_manage_div').append("<div class='panel panel-default hide_adddiv adddiv_querydept'>"+
						"<div class='panel-heading'>部门信息</div>"+
						"<table class='table addtr_querydept'>"+
						"<tbody><tr><th>编号</th><th>名称</th><th>所在地</th></tr></tbody>"+	
						"</table></div>");
					var dept = response.data;
					for( var i=0;i < dept.length ;i++ ){
						$('.addtr_querydept').append(
							"<tr><td>"+dept[i].deptno+"</td><td>"+dept[i].dname+"</td><td>"+dept[i].loc+"</td></tr>");
					}
					
				}
				else {
					layer.msg('输入数据有误');
				}
			},function(err){
				layer.msg('请求失败');
			});
	})
	$('.choseUpdatedept').click(function(){
		$('.hide_adddiv').remove();
		
		var deptcondition = '';
		var queryUrl = 'dept/query';
		var param = {
				query: deptcondition
		};
		publicDom.post(queryUrl,param,function(response){
				if (response.code == 1001) {
					$('.dept_manage_div').append("<div class='panel panel-default hide_adddiv adddiv_querydept'>"+
						"<div class='panel-heading'>部门信息</div>"+
						"<table class='table addtr_querydept'>"+
						"<tbody><tr><th>编号</th><th>名称</th><th>所在地</th></tr></tbody>"+	
						"</table></div>");
					var dept = response.data;
					for( var i=0;i < dept.length ;i++ ){
						$('.addtr_querydept').append(
							"<tr><td>"+dept[i].deptno+"</td><td>"+dept[i].dname+"</td><td>"+dept[i].loc+"</td></tr>");
					}
					
				}
				else {
					layer.msg('输入数据有误');
				}
			},function(err){
				layer.msg('请求失败');
			});
	})
	$('.choseDeldept').click(function(){
		$('.hide_adddiv').remove();
		
		var deptcondition = '';
		var queryUrl = 'dept/query';
		var param = {
				query: deptcondition
		};
		publicDom.post(queryUrl,param,function(response){
				if (response.code == 1001) {
					$('.dept_manage_div').append("<div class='panel panel-default hide_adddiv adddiv_querydept'>"+
						"<div class='panel-heading'>部门信息</div>"+
						"<table class='table addtr_querydept'>"+
						"<tbody><tr><th>编号</th><th>名称</th><th>所在地</th></tr></tbody>"+	
						"</table></div>");
					var dept = response.data;
					for( var i=0;i < dept.length ;i++ ){
						$('.addtr_querydept').append(
							"<tr><td>"+dept[i].deptno+"</td><td>"+dept[i].dname+"</td><td>"+dept[i].loc+"</td></tr>");
					}
					
				}
				else {
					layer.msg('输入数据有误');
				}
			},function(err){
				layer.msg('请求失败');
			});
	})
	$('.li_dept_manage').click(function(){
		$('.hide_adddiv').remove();
		
		var deptcondition = '';
		var queryUrl = 'dept/query';
		var param = {
				query: deptcondition
		};
		publicDom.post(queryUrl,param,function(response){
				if (response.code == 1001) {
					$('.dept_manage_div').append("<div class='panel panel-default hide_adddiv adddiv_querydept'>"+
						"<div class='panel-heading'>部门信息</div>"+
						"<table class='table addtr_querydept'>"+
						"<tbody><tr><th>编号</th><th>名称</th><th>所在地</th></tr></tbody>"+	
						"</table></div>");
					var dept = response.data;
					for( var i=0;i < dept.length ;i++ ){
						$('.addtr_querydept').append(
							"<tr><td>"+dept[i].deptno+"</td><td>"+dept[i].dname+"</td><td>"+dept[i].loc+"</td></tr>");
					}
					
				}
				else {
					layer.msg('输入数据有误');
				}
			},function(err){
				layer.msg('请求失败');
			});
	})
	
/*----------------------------------------------------------------------------查询部门-------------------------------------------*/
	$('.btn_query_dept').click(function(){
		$('.hide_adddiv').remove();
		
		var deptcondition = $('.get_deptcondition').val();
		var queryUrl = 'dept/query';
		var param = {
				query: deptcondition
		};
		publicDom.post(queryUrl,param,function(response){
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
					layer.msg('输入数据有误');
				}
			},function(err){
				layer.msg('请求失败');
			});
	})

/*-------------------------------------------------------------------------增加部门---------------------------------------------------*/
	$('.btn_add_dept').click(function(){
		$('.hide_adddiv').remove();
		var deptno = $('.get_deptno').val();
		var dname = $('.get_dname').val();
		var loc = $('.get_loc').val();
		var addUrl = 'dept/insert';
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
		var param = {
				deptno: deptno,
				dname: dname,
				loc: loc
		};
		// param = JSON.stringify(param);
		publicDom.post(addUrl,param,function(response){
				if (response.code == 1001) {
					layer.msg('添加成功');
					
				}
				else {
					layer.msg('输入数据有误');
				}
			},function(err){
				layer.msg('请求失败');
			});
		/*显示所有*/
		var deptcondition = '';
		var queryUrl = 'dept/query';
		var param = {
				query: deptcondition
		};
		publicDom.post(queryUrl,param,function(response){
				if (response.code == 1001) {
					$('.dept_manage_div').append("<div class='panel panel-default hide_adddiv adddiv_querydept'>"+
						"<div class='panel-heading'>部门信息</div>"+
						"<table class='table addtr_querydept'>"+
						"<tbody><tr><th>编号</th><th>名称</th><th>所在地</th></tr></tbody>"+	
						"</table></div>");
					var dept = response.data;
					for( var i=0;i < dept.length ;i++ ){
						$('.addtr_querydept').append(
							"<tr><td>"+dept[i].deptno+"</td><td>"+dept[i].dname+"</td><td>"+dept[i].loc+"</td></tr>");
					}
					
				}
				else {
					layer.msg('输入数据有误');
				}
			},function(err){
				layer.msg('请求失败');
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
		var param = {
				deptno: deptno,
				dname: dname,
				loc: loc
		};
		// param = JSON.stringify(param);
		publicDom.post(updateUrl,param,function(response){
				if (response.code == 1001) {
					layer.msg('修改成功');
					
				}
				else {
					layer.msg('输入数据有误');
				}
			},function(err){
				layer.msg('请求失败');
			});
		/*显示所有*/
		var deptcondition = '';
		var queryUrl = 'dept/query';
		var param = {
				query: deptcondition
		};
		publicDom.post(queryUrl,param,function(response){
				if (response.code == 1001) {
					$('.dept_manage_div').append("<div class='panel panel-default hide_adddiv adddiv_querydept'>"+
						"<div class='panel-heading'>部门信息</div>"+
						"<table class='table addtr_querydept'>"+
						"<tbody><tr><th>编号</th><th>名称</th><th>所在地</th></tr></tbody>"+	
						"</table></div>");
					var dept = response.data;
					for( var i=0;i < dept.length ;i++ ){
						$('.addtr_querydept').append(
							"<tr><td>"+dept[i].deptno+"</td><td>"+dept[i].dname+"</td><td>"+dept[i].loc+"</td></tr>");
					}
					
				}
				else {
					layer.msg('输入数据有误');
				}
			},function(err){
				layer.msg('请求失败');
			});
	})

/*----------------------------------------------------------------------------删除部门-------------------------------------------*/
	$('.btn_del_dept').click(function(){
		$('.hide_adddiv').remove();
		var deptno = $('.del_get_deptno').val();
		var delUrl = 'dept/delete';
		if($('.del_get_deptno').val()==""){
			layer.msg('部门编号不能为为空！',function(){
				return false;
			});
			return false;
		};
		var param = {
				deptno: deptno
		};
		publicDom.post(delUrl,param,function(response){
				if (response.code == 1001) {
					layer.msg('删除成功');
					
				}
				else {
					layer.msg('输入数据有误');
				}
			},function(err){
				layer.msg('请求失败');
			});
		/*显示所有*/
		var deptcondition = '';
		var queryUrl = 'dept/query';
		var param = {
				query: deptcondition
		};
		publicDom.post(queryUrl,param,function(response){
				if (response.code == 1001) {
					$('.dept_manage_div').append("<div class='panel panel-default hide_adddiv adddiv_querydept'>"+
						"<div class='panel-heading'>部门信息</div>"+
						"<table class='table addtr_querydept'>"+
						"<tbody><tr><th>编号</th><th>名称</th><th>所在地</th></tr></tbody>"+	
						"</table></div>");
					var dept = response.data;
					for( var i=0;i < dept.length ;i++ ){
						$('.addtr_querydept').append(
							"<tr><td>"+dept[i].deptno+"</td><td>"+dept[i].dname+"</td><td>"+dept[i].loc+"</td></tr>");
					}
					
				}
				else {
					layer.msg('输入数据有误');
				}
			},function(err){
				layer.msg('请求失败');
			});
	})


	
}
