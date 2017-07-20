$(function(){
	enterdata();
});


function enterdata(){

/*-----------------------------------------------------------查询所有--------------------------------------------------*/
	$('.choseQueryenterdata').click(function(){
		$('.hide_adddiv').remove();
		var queryUrl= 'attendance/query';
		var deptno='';
		var empno='';
		var startdate='';
		var enddate='';
		var date='';
		var param={
			deptno:deptno,
			empno:empno,
			date:date,
			startdate:startdate,
			enddate:enddate
		}
		publicDom.post(queryUrl,param,function(response){
				if (response.code == 1001) {
					$('.enterdata_div').append("<div class='panel panel-default hide_adddiv adddiv_queryenterdata'>"+
						"<div class='panel-heading'>考勤信息</div>"+
						"<table class='table'>"+
						"<tbody class='addtr_queryenterdata'><tr><th>考勤编号</th><th>员工编号</th><th>日期</th><th>病假</th>"+
						"<th>事假</th><th>迟到</th><th>早退</th><th>旷工</th><th>加班</th>"+	
						"</tr></tbody></table></div>");
					var enterdata = response.data;
					for( var i=0;i < enterdata.length;i++ ){
						$('.addtr_queryenterdata').append(
							"<tr><td>"+enterdata[i].ind+"</td><td>"+enterdata[i].empno+"</td><td>"+enterdata[i].date+"</td><td>"+enterdata[i].sickLeave+"</td>"+
							"<td>"+enterdata[i].personalLeave+"<td>"+enterdata[i].late+"</td>"+
							"<td>"+enterdata[i].earlyLeave+"</td><td>"+enterdata[i].neglect+"</td><td>"+enterdata[i].overTime+"</td><tr>"
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
	$('.choseAddenterdata').click(function(){
		$('.hide_adddiv').remove();
		var queryUrl= 'attendance/query';
		var deptno='';
		var empno='';
		var startdate='';
		var enddate='';
		var date='';
		var param={
			deptno:deptno,
			empno:empno,
			date:date,
			startdate:startdate,
			enddate:enddate
		}
		publicDom.post(queryUrl,param,function(response){
				if (response.code == 1001) {
					$('.enterdata_div').append("<div class='panel panel-default hide_adddiv adddiv_queryenterdata'>"+
						"<div class='panel-heading'>考勤信息</div>"+
						"<table class='table'>"+
						"<tbody class='addtr_queryenterdata'><tr><th>考勤编号</th><th>员工编号</th><th>日期</th><th>病假</th>"+
						"<th>事假</th><th>迟到</th><th>早退</th><th>旷工</th><th>加班</th>"+	
						"</tr></tbody></table></div>");
					var enterdata = response.data;
					for( var i=0;i < enterdata.length;i++ ){
						$('.addtr_queryenterdata').append(
							"<tr><td>"+enterdata[i].ind+"</td><td>"+enterdata[i].empno+"</td><td>"+enterdata[i].date+"</td><td>"+enterdata[i].sickLeave+"</td>"+
							"<td>"+enterdata[i].personalLeave+"<td>"+enterdata[i].late+"</td>"+
							"<td>"+enterdata[i].earlyLeave+"</td><td>"+enterdata[i].neglect+"</td><td>"+enterdata[i].overTime+"</td><tr>"
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
	$('.choseUpdateenterdata').click(function(){
		$('.hide_adddiv').remove();
		var queryUrl= 'attendance/query';
		var deptno='';
		var empno='';
		var startdate='';
		var enddate='';
		var date='';
		var param={
			deptno:deptno,
			empno:empno,
			date:date,
			startdate:startdate,
			enddate:enddate
		}
		publicDom.post(queryUrl,param,function(response){
				if (response.code == 1001) {
					$('.enterdata_div').append("<div class='panel panel-default hide_adddiv adddiv_queryenterdata'>"+
						"<div class='panel-heading'>考勤信息</div>"+
						"<table class='table'>"+
						"<tbody class='addtr_queryenterdata'><tr><th>考勤编号</th><th>员工编号</th><th>日期</th><th>病假</th>"+
						"<th>事假</th><th>迟到</th><th>早退</th><th>旷工</th><th>加班</th>"+	
						"</tr></tbody></table></div>");
					var enterdata = response.data;
					for( var i=0;i < enterdata.length;i++ ){
						$('.addtr_queryenterdata').append(
							"<tr><td>"+enterdata[i].ind+"</td><td>"+enterdata[i].empno+"</td><td>"+enterdata[i].date+"</td><td>"+enterdata[i].sickLeave+"</td>"+
							"<td>"+enterdata[i].personalLeave+"<td>"+enterdata[i].late+"</td>"+
							"<td>"+enterdata[i].earlyLeave+"</td><td>"+enterdata[i].neglect+"</td><td>"+enterdata[i].overTime+"</td><tr>"
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
	$('.choseDelenterdata').click(function(){
		$('.hide_adddiv').remove();
		var queryUrl= 'attendance/query';
		var deptno='';
		var empno='';
		var startdate='';
		var enddate='';
		var date='';
		var param={
			deptno:deptno,
			empno:empno,
			date:date,
			startdate:startdate,
			enddate:enddate
		}
		publicDom.post(queryUrl,param,function(response){
				if (response.code == 1001) {
					$('.enterdata_div').append("<div class='panel panel-default hide_adddiv adddiv_queryenterdata'>"+
						"<div class='panel-heading'>考勤信息</div>"+
						"<table class='table'>"+
						"<tbody class='addtr_queryenterdata'><tr><th>考勤编号</th><th>员工编号</th><th>日期</th><th>病假</th>"+
						"<th>事假</th><th>迟到</th><th>早退</th><th>旷工</th><th>加班</th>"+	
						"</tr></tbody></table></div>");
					var enterdata = response.data;
					for( var i=0;i < enterdata.length;i++ ){
						$('.addtr_queryenterdata').append(
							"<tr><td>"+enterdata[i].ind+"</td><td>"+enterdata[i].empno+"</td><td>"+enterdata[i].date+"</td><td>"+enterdata[i].sickLeave+"</td>"+
							"<td>"+enterdata[i].personalLeave+"<td>"+enterdata[i].late+"</td>"+
							"<td>"+enterdata[i].earlyLeave+"</td><td>"+enterdata[i].neglect+"</td><td>"+enterdata[i].overTime+"</td><tr>"
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
	$('.li_enterdata').click(function(){
		$('.hide_adddiv').remove();
		var queryUrl= 'attendance/query';
		var deptno='';
		var empno='';
		var startdate='';
		var enddate='';
		var date='';
		var param={
			deptno:deptno,
			empno:empno,
			date:date,
			startdate:startdate,
			enddate:enddate
		}
		publicDom.post(queryUrl,param,function(response){
				if (response.code == 1001) {
					$('.enterdata_div').append("<div class='panel panel-default hide_adddiv adddiv_queryenterdata'>"+
						"<div class='panel-heading'>考勤信息</div>"+
						"<table class='table'>"+
						"<tbody class='addtr_queryenterdata'><tr><th>考勤编号</th><th>员工编号</th><th>日期</th><th>病假</th>"+
						"<th>事假</th><th>迟到</th><th>早退</th><th>旷工</th><th>加班</th>"+	
						"</tr></tbody></table></div>");
					var enterdata = response.data;
					for( var i=0;i < enterdata.length;i++ ){
						$('.addtr_queryenterdata').append(
							"<tr><td>"+enterdata[i].ind+"</td><td>"+enterdata[i].empno+"</td><td>"+enterdata[i].date+"</td><td>"+enterdata[i].sickLeave+"</td>"+
							"<td>"+enterdata[i].personalLeave+"<td>"+enterdata[i].late+"</td>"+
							"<td>"+enterdata[i].earlyLeave+"</td><td>"+enterdata[i].neglect+"</td><td>"+enterdata[i].overTime+"</td><tr>"
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
	$('.btn_query_enterdata').click(function(){
		$('.hide_adddiv').remove();
		var queryUrl= 'attendance/query';
		var deptno=$('.enterdataquery_get_deptno').val();
		var empno=$('.enterdataquery_get_empno').val();
		var startdate=$('.enterdataquery_get_startdate').val();
		var enddate=$('.enterdataquery_get_stopdate').val();
		var mydate=new Date();
		var year=mydate.getFullYear();
		var month=mydate.getMonth();
		var day=mydate.getDate();
		var date=year+'-'+month+'-'+day;
		var param={
			deptno:deptno,
			empno:empno,
			date:date,
			startdate:startdate,
			enddate:enddate
		}
		publicDom.post(queryUrl,param,function(response){
				if (response.code == 1001) {
					$('.enterdata_div').append("<div class='panel panel-default hide_adddiv adddiv_queryenterdata'>"+
						"<div class='panel-heading'>考勤信息</div>"+
						"<table class='table'>"+
						"<tbody class='addtr_queryenterdata'><tr><th>考勤编号</th><th>员工编号</th><th>日期</th><th>病假</th>"+
						"<th>事假</th><th>迟到</th><th>早退</th><th>旷工</th><th>加班</th>"+	
						"</tr></tbody></table></div>");
					var enterdata = response.data;
					for( var i=0;i < enterdata.length;i++ ){
						$('.addtr_queryenterdata').append(
							"<tr><td>"+enterdata[i].ind+"</td><td>"+enterdata[i].empno+"</td><td>"+enterdata[i].date+"</td><td>"+enterdata[i].sickLeave+"</td>"+
							"<td>"+enterdata[i].personalLeave+"<td>"+enterdata[i].late+"</td>"+
							"<td>"+enterdata[i].earlyLeave+"</td><td>"+enterdata[i].neglect+"</td><td>"+enterdata[i].overTime+"</td><tr>"
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

/*-----------------------------------------------------------插入--------------------------------------------------*/
	$('.btn_add_enterdata').click(function(){
		$('.hide_adddiv').remove();
		var queryUrl= 'attendance/insert';

		var empno=$('.addenterdata_get_empno').val();
		var sickLeave=$('.addenterdata_get_sickLeave').val();
		var personalLeave=$('.addenterdata_get_personalLeave').val();
		var late=$('.addenterdata_get_late').val();
		var earlyLeave=$('.addenterdata_get_earlyLeave').val();
		var neglect=$('.addenterdata_get_neglect').val();
		var overtime=$('.addenterdata_get_overtime').val();
		var date=$('.addenterdata_get_date').val();
		if($('.addenterdata_get_date').val()==''){
			var mydate=new Date();
			var year=mydate.getFullYear();
			var month=mydate.getMonth();
			var day=mydate.getDate();
			date=year+'-'+month+'-'+day;
		}
		
		var param={
			empno:empno,
			sickLeave:sickLeave,
			personalLeave:personalLeave,
			late:late,
			earlyLeave:earlyLeave,
			date:date,
			neglect:neglect,
			overtime:overtime
		}
		publicDom.post(queryUrl,param,function(response){
				if (response.code == 1001) {
					layer.msg('插入成功');
					
				}
				else {
					layer.msg('输入数据有误');
				}
			},function(err){
				layer.msg('请求失败');
			});
	/*显示所有信息*/
		var queryUrl= 'attendance/query';
		var deptno='';
		var empno='';
		var startdate='';
		var enddate='';
		var date='';
		var param={
			deptno:deptno,
			empno:empno,
			date:date,
			startdate:startdate,
			enddate:enddate
		}
		publicDom.post(queryUrl,param,function(response){
				if (response.code == 1001) {
					$('.enterdata_div').append("<div class='panel panel-default hide_adddiv adddiv_queryenterdata'>"+
						"<div class='panel-heading'>考勤信息</div>"+
						"<table class='table'>"+
						"<tbody class='addtr_queryenterdata'><tr><th>考勤编号</th><th>员工编号</th><th>日期</th><th>病假</th>"+
						"<th>事假</th><th>迟到</th><th>早退</th><th>旷工</th><th>加班</th>"+	
						"</tr></tbody></table></div>");
					var enterdata = response.data;
					for( var i=0;i < enterdata.length;i++ ){
						$('.addtr_queryenterdata').append(
							"<tr><td>"+enterdata[i].ind+"</td><td>"+enterdata[i].empno+"</td><td>"+enterdata[i].date+"</td><td>"+enterdata[i].sickLeave+"</td>"+
							"<td>"+enterdata[i].personalLeave+"<td>"+enterdata[i].late+"</td>"+
							"<td>"+enterdata[i].earlyLeave+"</td><td>"+enterdata[i].neglect+"</td><td>"+enterdata[i].overTime+"</td><tr>"
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
	$('.btn_update_enterdata').click(function(){
		$('.hide_adddiv').remove();
		var queryUrl= 'attendance/update';

		var empno=$('.updateenterdata_get_empno').val();
		var sickLeave=$('.updateenterdata_get_sickLeave').val();
		var personalLeave=$('.updateenterdata_get_personalLeave').val();
		var late=$('.updateenterdata_get_late').val();
		var earlyLeave=$('.updateenterdata_get_earlyLeave').val();
		var neglect=$('.updateenterdata_get_neglect').val();
		var overtime=$('.updateenterdata_get_overtime').val();
		var date=$('.updateenterdata_get_date').val();
		if($('.updateenterdata_get_date').val()==''){
			var mydate=new Date();
			var year=mydate.getFullYear();
			var month=mydate.getMonth();
			var day=mydate.getDate();
			date=year+'-'+month+'-'+day;
		}
		
		var param={
			empno:empno,
			sickLeave:sickLeave,
			personalLeave:personalLeave,
			late:late,
			earlyLeave:earlyLeave,
			date:date,
			neglect:neglect,
			overtime:overtime
		}
		publicDom.post(queryUrl,param,function(response){
				if (response.code == 1001) {
					layer.msg('修改成功');
					
				}
				else {
					layer.msg('输入数据有误');
				}
			},function(err){
				layer.msg('请求失败');
			});
	/*显示所有信息*/
		var queryUrl= 'attendance/query';
		var deptno='';
		var empno='';
		var startdate='';
		var enddate='';
		var date='';
		var param={
			deptno:deptno,
			empno:empno,
			date:date,
			startdate:startdate,
			enddate:enddate
		}
		publicDom.post(queryUrl,param,function(response){
				if (response.code == 1001) {
					$('.enterdata_div').append("<div class='panel panel-default hide_adddiv adddiv_queryenterdata'>"+
						"<div class='panel-heading'>考勤信息</div>"+
						"<table class='table'>"+
						"<tbody class='addtr_queryenterdata'><tr><th>考勤编号</th><th>员工编号</th><th>日期</th><th>病假</th>"+
						"<th>事假</th><th>迟到</th><th>早退</th><th>旷工</th><th>加班</th>"+	
						"</tr></tbody></table></div>");
					var enterdata = response.data;
					for( var i=0;i < enterdata.length;i++ ){
						$('.addtr_queryenterdata').append(
							"<tr><td>"+enterdata[i].ind+"</td><td>"+enterdata[i].empno+"</td><td>"+enterdata[i].date+"</td><td>"+enterdata[i].sickLeave+"</td>"+
							"<td>"+enterdata[i].personalLeave+"<td>"+enterdata[i].late+"</td>"+
							"<td>"+enterdata[i].earlyLeave+"</td><td>"+enterdata[i].neglect+"</td><td>"+enterdata[i].overTime+"</td><tr>"
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
	$('.btn_del_enterdata').click(function(){
		$('.hide_adddiv').remove();
		var queryUrl= 'attendance/delete';

		var empno=$('.delenterdata_get_empno').val();
		var date=$('.delenterdata_get_date').val();
		if($('.delenterdata_get_empno').val()==''||$('.delenterdata_get_date').val()==''){
			layer.msg('员工编号和日期不能为空',function(){
				return false;
			});
			return false;
		};
		
		var param={
			empno:empno,
			date:date
		}
		publicDom.post(queryUrl,param,function(response){
				if (response.code == 1001) {
					layer.msg('删除成功');
					
				}
				else {
					layer.msg('输入数据有误');
				}
			},function(err){
				layer.msg('请求失败');
			});
	/*显示所有信息*/
		var queryUrl= 'attendance/query';
		var deptno='';
		var empno='';
		var startdate='';
		var enddate='';
		var date='';
		var param={
			deptno:deptno,
			empno:empno,
			date:date,
			startdate:startdate,
			enddate:enddate
		}
		publicDom.post(queryUrl,param,function(response){
				if (response.code == 1001) {
					$('.enterdata_div').append("<div class='panel panel-default hide_adddiv adddiv_queryenterdata'>"+
						"<div class='panel-heading'>考勤信息</div>"+
						"<table class='table'>"+
						"<tbody class='addtr_queryenterdata'><tr><th>考勤编号</th><th>员工编号</th><th>日期</th><th>病假</th>"+
						"<th>事假</th><th>迟到</th><th>早退</th><th>旷工</th><th>加班</th>"+	
						"</tr></tbody></table></div>");
					var enterdata = response.data;
					for( var i=0;i < enterdata.length;i++ ){
						$('.addtr_queryenterdata').append(
							"<tr><td>"+enterdata[i].ind+"</td><td>"+enterdata[i].empno+"</td><td>"+enterdata[i].date+"</td><td>"+enterdata[i].sickLeave+"</td>"+
							"<td>"+enterdata[i].personalLeave+"<td>"+enterdata[i].late+"</td>"+
							"<td>"+enterdata[i].earlyLeave+"</td><td>"+enterdata[i].neglect+"</td><td>"+enterdata[i].overTime+"</td><tr>"
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