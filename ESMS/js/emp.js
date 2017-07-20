$(function(){
	emp();
});


function emp(){

/*-----------------------------------------------------------查询所有--------------------------------------------------*/
	$('.choseAddemp').click(function(){
		$('.hide_adddiv').remove();
		var queryUrl= 'emp/query';
		var empno='';
		var ename='';
		var deptno='';
		var gender='';
		var minAge='';
		var maxAge='';
		var startdate='';
		var enddate='';
		var position='';
		var param={
			empno:empno,
			ename:ename,
			deptno:deptno,
			gender:gender,
			minAge:minAge,
			maxAge:maxAge,
			startdate:startdate,
			enddate:enddate,
			position:position
		}
		publicDom.post(queryUrl,param,function(response){
				if (response.code == 1001) {
					$('.emp_manage_div').append("<div class='panel panel-default hide_adddiv adddiv_queryemp'>"+
<<<<<<< HEAD
						"<div class='panel-heading'>员工信息</div>"+
=======
						"<div class='panel-heading'>岗位信息</div>"+
>>>>>>> dc3de82557ead74a7d719e90d49ad417f5ca5588
						"<table class='table'>"+
						"<tbody class='addtr_queryemp'><tr><th>员工编号</th><th>员工名称</th><th>性别</th><th>年龄</th>"+
						"<th>岗位编号</th><th>部门编号</th><th>雇用时间</th>"+	
						"</tr></tbody></table></div>");
					var emp = response.data;
					for( var i=0;i < emp.length;i++ ){
						$('.addtr_queryemp').append(
							"<tr><td>"+emp[i].empno+"</td><td>"+emp[i].ename+"</td><td>"+emp[i].gender+"</td>"+
							"<td>"+emp[i].age+"<td>"+emp[i].position.ind+"</td><td>"+emp[i].deptno+"</td><td>"+emp[i].hireDate+"</td></tr>"
							);
					}
					
				}
				else {
<<<<<<< HEAD
					layer.msg('输入数据有误');
				}
			},function(err){
				layer.msg('请求失败');
=======
					layer.msg('错误1');
				}
			},function(err){
				layer.msg('错误2');
>>>>>>> dc3de82557ead74a7d719e90d49ad417f5ca5588
			});
	});
	$('.choseQueryemp').click(function(){
		$('.hide_adddiv').remove();
		var queryUrl= 'emp/query';
		var empno='';
		var ename='';
		var deptno='';
		var gender='';
		var minAge='';
		var maxAge='';
		var startdate='';
		var enddate='';
		var position='';
		var param={
			empno:empno,
			ename:ename,
			deptno:deptno,
			gender:gender,
			minAge:minAge,
			maxAge:maxAge,
			startdate:startdate,
			enddate:enddate,
			position:position
		}
		publicDom.post(queryUrl,param,function(response){
				if (response.code == 1001) {
					$('.emp_manage_div').append("<div class='panel panel-default hide_adddiv adddiv_queryemp'>"+
<<<<<<< HEAD
						"<div class='panel-heading'>员工信息</div>"+
=======
						"<div class='panel-heading'>岗位信息</div>"+
>>>>>>> dc3de82557ead74a7d719e90d49ad417f5ca5588
						"<table class='table'>"+
						"<tbody class='addtr_queryemp'><tr><th>员工编号</th><th>员工名称</th><th>性别</th><th>年龄</th>"+
						"<th>岗位编号</th><th>部门编号</th><th>雇用时间</th>"+	
						"</tr></tbody></table></div>");
					var emp = response.data;
					for( var i=0;i < emp.length;i++ ){
						$('.addtr_queryemp').append(
							"<tr><td>"+emp[i].empno+"</td><td>"+emp[i].ename+"</td><td>"+emp[i].gender+"</td>"+
							"<td>"+emp[i].age+"<td>"+emp[i].position.ind+"</td><td>"+emp[i].deptno+"</td><td>"+emp[i].hireDate+"</td></tr>"
							);
					}
					
				}
				else {
<<<<<<< HEAD
					layer.msg('输入数据有误');
				}
			},function(err){
				layer.msg('请求失败');
=======
					layer.msg('错误1');
				}
			},function(err){
				layer.msg('错误2');
>>>>>>> dc3de82557ead74a7d719e90d49ad417f5ca5588
			});
	});
	$('.choseUpdateemp').click(function(){
		$('.hide_adddiv').remove();
		var queryUrl= 'emp/query';
		var empno='';
		var ename='';
		var deptno='';
		var gender='';
		var minAge='';
		var maxAge='';
		var startdate='';
		var enddate='';
		var position='';
		var param={
			empno:empno,
			ename:ename,
			deptno:deptno,
			gender:gender,
			minAge:minAge,
			maxAge:maxAge,
			startdate:startdate,
			enddate:enddate,
			position:position
		}
		publicDom.post(queryUrl,param,function(response){
				if (response.code == 1001) {
					$('.emp_manage_div').append("<div class='panel panel-default hide_adddiv adddiv_queryemp'>"+
<<<<<<< HEAD
						"<div class='panel-heading'>员工信息</div>"+
=======
						"<div class='panel-heading'>岗位信息</div>"+
>>>>>>> dc3de82557ead74a7d719e90d49ad417f5ca5588
						"<table class='table'>"+
						"<tbody class='addtr_queryemp'><tr><th>员工编号</th><th>员工名称</th><th>性别</th><th>年龄</th>"+
						"<th>岗位编号</th><th>部门编号</th><th>雇用时间</th>"+	
						"</tr></tbody></table></div>");
					var emp = response.data;
					for( var i=0;i < emp.length;i++ ){
						$('.addtr_queryemp').append(
							"<tr><td>"+emp[i].empno+"</td><td>"+emp[i].ename+"</td><td>"+emp[i].gender+"</td>"+
							"<td>"+emp[i].age+"<td>"+emp[i].position.ind+"</td><td>"+emp[i].deptno+"</td><td>"+emp[i].hireDate+"</td></tr>"
							);
					}
					
				}
				else {
<<<<<<< HEAD
					layer.msg('输入数据有误');
				}
			},function(err){
				layer.msg('请求失败');
=======
					layer.msg('错误1');
				}
			},function(err){
				layer.msg('错误2');
>>>>>>> dc3de82557ead74a7d719e90d49ad417f5ca5588
			});
	});
	$('.choseDelemp').click(function(){
		$('.hide_adddiv').remove();
		var queryUrl= 'emp/query';
		var empno='';
		var ename='';
		var deptno='';
		var gender='';
		var minAge='';
		var maxAge='';
		var startdate='';
		var enddate='';
		var position='';
		var param={
			empno:empno,
			ename:ename,
			deptno:deptno,
			gender:gender,
			minAge:minAge,
			maxAge:maxAge,
			startdate:startdate,
			enddate:enddate,
			position:position
		}
		publicDom.post(queryUrl,param,function(response){
				if (response.code == 1001) {
					$('.emp_manage_div').append("<div class='panel panel-default hide_adddiv adddiv_queryemp'>"+
<<<<<<< HEAD
						"<div class='panel-heading'>员工信息</div>"+
=======
						"<div class='panel-heading'>岗位信息</div>"+
>>>>>>> dc3de82557ead74a7d719e90d49ad417f5ca5588
						"<table class='table'>"+
						"<tbody class='addtr_queryemp'><tr><th>员工编号</th><th>员工名称</th><th>性别</th><th>年龄</th>"+
						"<th>岗位编号</th><th>部门编号</th><th>雇用时间</th>"+	
						"</tr></tbody></table></div>");
					var emp = response.data;
					for( var i=0;i < emp.length;i++ ){
						$('.addtr_queryemp').append(
							"<tr><td>"+emp[i].empno+"</td><td>"+emp[i].ename+"</td><td>"+emp[i].gender+"</td>"+
							"<td>"+emp[i].age+"<td>"+emp[i].position.ind+"</td><td>"+emp[i].deptno+"</td><td>"+emp[i].hireDate+"</td></tr>"
							);
					}
					
				}
				else {
<<<<<<< HEAD
					layer.msg('输入数据有误');
				}
			},function(err){
				layer.msg('请求失败');
=======
					layer.msg('错误1');
				}
			},function(err){
				layer.msg('错误2');
>>>>>>> dc3de82557ead74a7d719e90d49ad417f5ca5588
			});
	});
	$('.li_emp_manage').click(function(){
		$('.hide_adddiv').remove();
		var queryUrl= 'emp/query';
		var empno='';
		var ename='';
		var deptno='';
		var gender='';
		var minAge='';
		var maxAge='';
		var startdate='';
		var enddate='';
		var position='';
		var param={
			empno:empno,
			ename:ename,
			deptno:deptno,
			gender:gender,
			minAge:minAge,
			maxAge:maxAge,
			startdate:startdate,
			enddate:enddate,
			position:position
		}
		publicDom.post(queryUrl,param,function(response){
				if (response.code == 1001) {
					$('.emp_manage_div').append("<div class='panel panel-default hide_adddiv adddiv_queryemp'>"+
<<<<<<< HEAD
						"<div class='panel-heading'>员工信息</div>"+
=======
						"<div class='panel-heading'>岗位信息</div>"+
>>>>>>> dc3de82557ead74a7d719e90d49ad417f5ca5588
						"<table class='table'>"+
						"<tbody class='addtr_queryemp'><tr><th>员工编号</th><th>员工名称</th><th>性别</th><th>年龄</th>"+
						"<th>岗位编号</th><th>部门编号</th><th>雇用时间</th>"+	
						"</tr></tbody></table></div>");
					var emp = response.data;
					for( var i=0;i < emp.length;i++ ){
						$('.addtr_queryemp').append(
							"<tr><td>"+emp[i].empno+"</td><td>"+emp[i].ename+"</td><td>"+emp[i].gender+"</td>"+
							"<td>"+emp[i].age+"<td>"+emp[i].position.ind+"</td><td>"+emp[i].deptno+"</td><td>"+emp[i].hireDate+"</td></tr>"
							);
					}
					
				}
				else {
<<<<<<< HEAD
					layer.msg('输入数据有误');
				}
			},function(err){
				layer.msg('请求失败');
=======
					layer.msg('错误1');
				}
			},function(err){
				layer.msg('错误2');
>>>>>>> dc3de82557ead74a7d719e90d49ad417f5ca5588
			});
	});
	
/*-----------------------------------------------------------查询--------------------------------------------------*/
	$('.btn_query_emp').click(function(){
		$('.hide_adddiv').remove();
		var queryUrl= 'emp/query';
		var empno=$('.queryemp_get_empno').val();
		var ename=$('.queryemp_get_ename').val();
		var deptno=$('.queryemp_get_deptno').val();
		var gender=$('.queryemp_get_sex').val();
		var minAge=$('.queryemp_get_minage').val();
		var maxAge=$('.queryemp_get_maxage').val();
		var startdate=$('.queryemp_get_startdate').val();
		var enddate=$('.queryemp_get_stopdate').val();
		var position=$('.queryemp_get_jobno').val();
		var param={
			empno:empno,
			ename:ename,
			deptno:deptno,
			gender:gender,
			minAge:minAge,
			maxAge:maxAge,
			startdate:startdate,
			enddate:enddate,
			position:position
		}
		publicDom.post(queryUrl,param,function(response){
				if (response.code == 1001) {
					$('.emp_manage_div').append("<div class='panel panel-default hide_adddiv adddiv_queryemp'>"+
<<<<<<< HEAD
						"<div class='panel-heading'>员工信息</div>"+
=======
						"<div class='panel-heading'>岗位信息</div>"+
>>>>>>> dc3de82557ead74a7d719e90d49ad417f5ca5588
						"<table class='table'>"+
						"<tbody class='addtr_queryemp'><tr><th>员工编号</th><th>员工名称</th><th>性别</th><th>年龄</th>"+
						"<th>岗位编号</th><th>部门编号</th><th>雇用时间</th>"+	
						"</tr></tbody></table></div>");
					var emp = response.data;
					for( var i=0;i < emp.length;i++ ){
						$('.addtr_queryemp').append(
							"<tr><td>"+emp[i].empno+"</td><td>"+emp[i].ename+"</td><td>"+emp[i].gender+"</td>"+
							"<td>"+emp[i].age+"<td>"+emp[i].position.ind+"</td><td>"+emp[i].deptno+"</td><td>"+emp[i].hireDate+"</td></tr>"
							);
					}
					
				}
				else {
<<<<<<< HEAD
					layer.msg('输入数据有误');
				}
			},function(err){
				layer.msg('请求失败');
=======
					layer.msg('错误1');
				}
			},function(err){
				layer.msg('错误2');
>>>>>>> dc3de82557ead74a7d719e90d49ad417f5ca5588
			});
	});

/*-----------------------------------------------------------增加--------------------------------------------------*/
	$('.btn_add_emp').click(function(){
		$('.hide_adddiv').remove();
		var queryUrl= 'emp/insert';
		var empno=$('.addemp_get_empno').val();
		var ename=$('.addemp_get_ename').val();
		var deptno=$('.addemp_get_deptno').val();
		var gender=$('.addemp_get_sex').val();
		var age=$('.addemp_get_age').val();
		var hiredate=$('.addemp_get_date').val();
		var position=$('.addemp_get_jobno').val();
		var param={
			empno:empno,
			ename:ename,
			deptno:deptno,
			gender:gender,
			age:age,
			hiredate:hiredate,
			position:position
		}
		publicDom.post(queryUrl,param,function(response){
				if (response.code == 1001) {
					$('.emp_manage_div').append("<div class='panel panel-default hide_adddiv adddiv_queryemp'>"+
<<<<<<< HEAD
						"<div class='panel-heading'>员工信息</div>"+
=======
						"<div class='panel-heading'>岗位信息</div>"+
>>>>>>> dc3de82557ead74a7d719e90d49ad417f5ca5588
						"<table class='table'>"+
						"<tbody class='addtr_queryemp'><tr><th>员工编号</th><th>员工名称</th><th>性别</th><th>年龄</th>"+
						"<th>岗位编号</th><th>部门编号</th><th>雇用时间</th>"+	
						"</tr></tbody></table></div>");
					var emp = response.data;
					for( var i=0;i < emp.length;i++ ){
						$('.addtr_queryemp').append(
							"<tr><td>"+emp[i].empno+"</td><td>"+emp[i].ename+"</td><td>"+emp[i].gender+"</td>"+
							"<td>"+emp[i].age+"<td>"+emp[i].position.ind+"</td><td>"+emp[i].deptno+"</td><td>"+emp[i].hireDate+"</td></tr>"
							);
					}
					
				}
				else {
<<<<<<< HEAD
					layer.msg('输入数据有误');
				}
			},function(err){
				layer.msg('请求失败');
=======
					layer.msg('错误1');
				}
			},function(err){
				layer.msg('错误2');
>>>>>>> dc3de82557ead74a7d719e90d49ad417f5ca5588
			});
	});

/*-----------------------------------------------------------修改--------------------------------------------------*/
	$('.btn_update_emp').click(function(){
		$('.hide_adddiv').remove();
		var queryUrl= 'emp/update';
		var empno=$('.updateemp_get_empno').val();
		var ename=$('.updateemp_get_ename').val();
		var deptno=$('.updateemp_get_deptno').val();
		var gender=$('.updateemp_get_sex').val();
		var age=$('.updateemp_get_age').val();
		var hiredate=$('.updateemp_get_date').val();
		var position=$('.updateemp_get_jobno').val();
		var param={
			empno:empno,
			ename:ename,
			deptno:deptno,
			gender:gender,
			age:age,
			hiredate:hiredate,
			position:position
		}
<<<<<<< HEAD
		publicDom.post(queryUrl,param,function(response){
				if (response.code == 1001) {
					$('.emp_manage_div').append("<div class='panel panel-default hide_adddiv adddiv_queryemp'>"+
						"<div class='panel-heading'>员工信息</div>"+
=======
		console.log(param);
		publicDom.post(queryUrl,param,function(response){
					console.log(response.code);
				if (response.code == 1001) {
					$('.emp_manage_div').append("<div class='panel panel-default hide_adddiv adddiv_queryemp'>"+
						"<div class='panel-heading'>岗位信息</div>"+
>>>>>>> dc3de82557ead74a7d719e90d49ad417f5ca5588
						"<table class='table'>"+
						"<tbody class='addtr_queryemp'><tr><th>员工编号</th><th>员工名称</th><th>性别</th><th>年龄</th>"+
						"<th>岗位编号</th><th>部门编号</th><th>雇用时间</th>"+	
						"</tr></tbody></table></div>");
					var emp = response.data;
					for( var i=0;i < emp.length;i++ ){
						$('.addtr_queryemp').append(
							"<tr><td>"+emp[i].empno+"</td><td>"+emp[i].ename+"</td><td>"+emp[i].gender+"</td>"+
							"<td>"+emp[i].age+"<td>"+emp[i].position.ind+"</td><td>"+emp[i].deptno+"</td><td>"+emp[i].hireDate+"</td></tr>"
							);
					}
					
				}
				else {
<<<<<<< HEAD
					layer.msg('输入数据有误');
				}
			},function(err){
				layer.msg('请求失败');
=======
					layer.msg('错误1');
				}
			},function(err){
				layer.msg('错误2');
>>>>>>> dc3de82557ead74a7d719e90d49ad417f5ca5588
			});
	});

/*-----------------------------------------------------------删除--------------------------------------------------*/
	$('.btn_del_emp').click(function(){
		$('.hide_adddiv').remove();
		var queryUrl= 'emp/delete';
		var empno=$('.delemp_get_empno').val();
		var param={
			empno:empno
		}
<<<<<<< HEAD
		publicDom.post(queryUrl,param,function(response){
				if (response.code == 1001) {
					$('.emp_manage_div').append("<div class='panel panel-default hide_adddiv adddiv_queryemp'>"+
						"<div class='panel-heading'>员工信息</div>"+
=======
		console.log(param);
		publicDom.post(queryUrl,param,function(response){
					console.log(response.code);
				if (response.code == 1001) {
					$('.emp_manage_div').append("<div class='panel panel-default hide_adddiv adddiv_queryemp'>"+
						"<div class='panel-heading'>岗位信息</div>"+
>>>>>>> dc3de82557ead74a7d719e90d49ad417f5ca5588
						"<table class='table'>"+
						"<tbody class='addtr_queryemp'><tr><th>员工编号</th><th>员工名称</th><th>性别</th><th>年龄</th>"+
						"<th>岗位编号</th><th>部门编号</th><th>雇用时间</th>"+	
						"</tr></tbody></table></div>");
					var emp = response.data;
					for( var i=0;i < emp.length;i++ ){
						$('.addtr_queryemp').append(
							"<tr><td>"+emp[i].empno+"</td><td>"+emp[i].ename+"</td><td>"+emp[i].gender+"</td>"+
							"<td>"+emp[i].age+"<td>"+emp[i].position.ind+"</td><td>"+emp[i].deptno+"</td><td>"+emp[i].hireDate+"</td></tr>"
							);
					}
					
				}
				else {
<<<<<<< HEAD
					layer.msg('输入数据有误');
				}
			},function(err){
				layer.msg('请求失败');
=======
					layer.msg('错误1');
				}
			},function(err){
				layer.msg('错误2');
>>>>>>> dc3de82557ead74a7d719e90d49ad417f5ca5588
			});
	});






}