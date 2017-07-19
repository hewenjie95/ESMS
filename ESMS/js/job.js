$(function(){
	job();
});

function job(){

/*--------------------------------------------------------------------查询岗位------------------------------------------------------*/
	$('.btn_query_job').click(function(){
		$('.hide_adddiv').remove();
		var jobno=$('.get_jobno').val();
		var jname=$('.get_jname').val();
		var minsal=$('.get_minsal').val();
		var maxsal=$('.get_maxsal').val();
		var queryUrl= 'position/query';
		var param={
			ind : jobno,
			name : jname,
			minSalary : minsal,
			maxSalary : maxsal
		}

		publicDom.post(queryUrl,param,function(response){
				if (response.code == 1001) {
					$('.job_manage_div').append("<div class='panel panel-default hide_adddiv adddiv_queryjob'>"+
						"<div class='panel-heading'>岗位信息</div>"+
						"<table class='table addtr_queryjob'>"+
						"<tbody><tr><th>编号</th><th>名称</th><th>基本工资</th></tr></tbody>"+	
						"</table></div>");
					var job = response.data;
					for( var i=0;i < job.length;i++ ){
						$('.addtr_queryjob').append(
							"<tr><td>"+job[i].ind+"</td><td>"+job[i].name+"</td><td>"+job[i].baseSalary+"</td></tr>");
					}
					
				}
				else {
					layer.msg('错误1');
				}
			},function(err){
				layer.msg('错误2');
			});
	})

/*-------------------------------------------------------增加岗位------------------------------------------*/
	$('.btn_add_job').click(function(){
		$('.hide_adddiv').remove();
		var jobno = $('.add_get_jobno').val();
		var jname = $('.add_get_jname').val();
		var basesal = $('.add_get_basesal').val();
		var addUrl= 'position/insert';
		if($('.add_get_jobno').val()==""||$('.add_get_jname').val()==""||$('.add_get_basesal').val()==""){
			layer.msg('请输入完整的岗位信息',function(){
				return false;
			});
			return false;
		};
		if($('.get_deptno').val().length>4){
			layer.msg('岗位编号长度不能大于4',function(){
				return false;
			});
			return false;
		};
		/*console.log(user_name);
		console.log(user_password);*/
		var param = {
				ind: jobno,
				name: jname,
				baseSalary: basesal
		};
		console.log(param);
		// param = JSON.stringify(param);
		publicDom.post(addUrl,param,function(response){
			console.log(123);
				if (response.code == 1001) {
					layer.msg('添加成功');
					$('.dept_manage_div').append("<div class='panel panel-default hide_adddiv adddiv_queryjob'>"+
						"<div class='panel-heading'>岗位信息</div>"+
						"<table class='table addtr_queryjob'>"+
						"<tbody><tr><th>编号</th><th>名称</th><th>基本工资</th></tr></tbody>"+	
						"</table></div>");
					var job = response.data;
					for( var i=0;i < job.length;i++ ){
						$('.addtr_queryjob').append(
							"<tr><td>"+job[i].jobno+"</td><td>"+job[i].jname+"</td><td>"+job[i].baseSalary+"</td></tr>");
					}
				}
				else {
					layer.msg('错误1');
				}
			},function(err){
				layer.msg('错误2');
			});
	})

/*----------------------------------------------------------------------------修改岗位-------------------------------------------*/
	$('.btn_update_job').click(function(){
		$('.hide_adddiv').remove();
		var jobno = $('.update_get_jobno').val();
		var jname = $('.update_get_jname').val();
		var basesal = $('.update_get_basesal').val();
		var updateUrl = 'position/update';
		if($('.update_get_jobno').val()==""||$('.update_get_jname').val()==""||$('.update_get_basesal').val()==""){
			layer.msg('岗位信息不能为为空！',function(){
				return false;
			});
			return false;
		};
		/*console.log(user_name);
		console.log(user_password);*/
		var param = {
				ind: jobno,
				name: jname,
				baseSalary: basesal
		};
		// param = JSON.stringify(param);
		publicDom.post(updateUrl,param,function(response){
				if (response.code == 1001) {
					layer.msg('修改成功');
					$('.dept_manage_div').append("<div class='panel panel-default hide_adddiv adddiv_queryjob'>"+
						"<div class='panel-heading'>岗位信息</div>"+
						"<table class='table addtr_queryjob'>"+
						"<tbody><tr><th>编号</th><th>名称</th><th>基本工资</th></tr></tbody>"+	
						"</table></div>");
					var job = response.data;
					for( var i=0;i < job.length;i++ ){
						$('.addtr_queryjob').append(
							"<tr><td>"+job[i].jobno+"</td><td>"+job[i].jname+"</td><td>"+job[i].baseSalary+"</td></tr>");
					}
					
				}
				else {
					layer.msg('错误1');
				}
			},function(err){
				layer.msg('错误2');
			});
	})

/*----------------------------------------------------------------------------删除岗位-------------------------------------------*/
	$('.btn_del_job').click(function(){
		$('.hide_adddiv').remove();
		var jobno = $('.del_get_jobno').val();
		var delUrl = 'position/delete';
		if($('.del_get_jobno').val()==""){
			layer.msg('岗位编号不能为为空！',function(){
				return false;
			});
			return false;
		};
		var param = {
				ind: jobno
		};
		console.log(param);
		// param = JSON.stringify(param);
		publicDom.post(delUrl,param,function(response){
				if (response.code == 1001) {
					layer.msg('删除成功');
					$('.dept_manage_div').append("<div class='panel panel-default hide_adddiv adddiv_queryjob'>"+
						"<div class='panel-heading'>岗位信息</div>"+
						"<table class='table addtr_queryjob'>"+
						"<tbody><tr><th>编号</th><th>名称</th><th>基本工资</th></tr></tbody>"+	
						"</table></div>");
					var job = response.data;
					for( var i=0;i < job.length;i++ ){
						$('.addtr_queryjob').append(
							"<tr><td>"+job[i].jobno+"</td><td>"+job[i].jname+"</td><td>"+job[i].baseSalary+"</td></tr>");
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