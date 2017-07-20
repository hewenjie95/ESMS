$(function(){
	salsettle();
});

function salsettle(){

/*-------------------------------------------------------------------员工工资---------------------------------------------------------------*/
	$('.btn_settle_emp').click(function(){
		$('.hide_adddiv').remove();
		var empno = $('.settleemp_get_empno').val();
		var date = $('.settleemp_get_date').val();
		if($('.settleemp_get_date').val()==''){
			var mydate=new Date();
			var year=mydate.getFullYear();
			var month=mydate.getMonth();
			var day=mydate.getDate();
			date=year+'-'+month+'-'+day;
		}
		if($('.settleemp_get_empno').val()==""){
			layer.msg('员工编号不能为空',function(){
				return false;
			});
			return false;
		};
		var queryUrl = 'salary/settleForEmp';
		var param = {
				empno: empno,
				date:date
		};
		publicDom.post(queryUrl,param,function(response){
				if (response.code == 1001) {
					var res=response.data;
					$('.salsettle_div').append("<div class='hide_adddiv adddiv_settleemp' style='margin-left:30px;'></div>");
					$('.adddiv_settleemp').append(
						"date:"+res.date+",<br/>"+
						"penalty:"+res.penalty+",<br/>"+
						"bonus:"+res.bonus+",<br/>"+
						"datsick_leavea:"+res.sick_leave+",<br/>"+
						"empno:"+res.empno+",<br/>"+
						"total:"+res.total+",<br/>"+
						"late:"+res.late+",<br/>"+
						"final:"+res.final+",<br/>"+
						"overtime:"+res.overtime+",<br/>"+
						"personal_leave:"+res.personal_leave+",<br/>"+
						"neglect:"+res.neglect
						);
					for(var i=0;i<res.column.length;i++){
						$('.adddiv_settleemp').append(",<br/>"+res.column[i]+":"+res.data[i]);
					}
					
				}
				else {
					layer.msg('输入数据有误');
				}
			},function(err){
				layer.msg('请求失败');
			});
	})

/*-------------------------------------------------------------------部门工资---------------------------------------------------------------*/
	$('.btn_settle_dept').click(function(){
		$('.hide_adddiv').remove();
		var deptno = $('.settledept_get_deptno').val();
		var date = $('.settledept_get_date').val();
		if($('.settledept_get_date').val()==''){
			var mydate=new Date();
			var year=mydate.getFullYear();
			var month=mydate.getMonth();
			var day=mydate.getDate();
			date=year+'-'+month+'-'+day;
		}
		if($('.settledept_get_deptno').val()==""){
			layer.msg('员工编号不能为空',function(){
				return false;
			});
			return false;
		};
		var queryUrl = 'salary/settleForDept';
		var param = {
				deptno: deptno,
				date:date
		};
		publicDom.post(queryUrl,param,function(response){
				$('.salsettle_div').append("<div class='hide_adddiv adddiv_settleemp' style='margin-left:30px;'></div>");
				if (response.data!='') {
					var res=response.data[0];
					$('.adddiv_settleemp').append(
						"date:"+res.date+",<br/>"+
						"penalty:"+res.penalty+",<br/>"+
						"bonus:"+res.bonus+",<br/>"+
						"datsick_leavea:"+res.sick_leave+",<br/>"+
						"empno:"+res.empno+",<br/>"+
						"total:"+res.total+",<br/>"+
						"late:"+res.late+",<br/>"+
						"final:"+res.final+",<br/>"+
						"overtime:"+res.overtime+",<br/>"+
						"personal_leave:"+res.personal_leave+",<br/>"+
						"neglect:"+res.neglect
						);
					for(var i=0;i<res.column.length;i++){
						$('.adddiv_settleemp').append(",<br/>"+res.column[i]+":"+res.data[i]);
					}
					
				}
				else if(response.error!=''){
					layer.msg(response.error);
				}
				else{
					layer.msg('输入数据有误');
				}
			},function(err){
				layer.msg('请求失败');
			});
	})

/*-------------------------------------------------------------------发放工资---------------------------------------------------------------*/
	$('.btn_issue_sal').click(function(){
		$('.hide_adddiv').remove();
		var empno = $('.issuesal_get_empno').val();
		var date = $('.issuesal_get_date').val();
		if($('.issuesal_get_date').val()==''){
			var mydate=new Date();
			var year=mydate.getFullYear();
			var month=mydate.getMonth();
			var day=mydate.getDate();
			date=year+'-'+month+'-'+day;
		}
		if($('.issuesal_get_empno').val()==""){
			layer.msg('员工编号不能为空',function(){
				return false;
			});
			return false;
		};
		var queryUrl = 'salary/issueForEmp';
		var param = {
				empno: empno,
				date:date
		};
		publicDom.post(queryUrl,param,function(response){
				$('.salsettle_div').append("<div class='hide_adddiv adddiv_settleemp' style='margin-left:30px;'></div>");
				if (response.code==1001) {
					var res=response.data[0];
					console.log(res);
					$('.adddiv_settleemp').append(
						"date:"+res.date+",<br/>"+
						"penalty:"+res.penalty+",<br/>"+
						"bonus:"+res.bonus+",<br/>"+
						"datsick_leavea:"+res.sick_leave+",<br/>"+
						"empno:"+res.empno+",<br/>"+
						"total:"+res.total+",<br/>"+
						"late:"+res.late+",<br/>"+
						"final:"+res.final+",<br/>"+
						"overtime:"+res.overtime+",<br/>"+
						"personal_leave:"+res.personal_leave+",<br/>"+
						"neglect:"+res.neglect
						);
					for(var i=0;i<res.column.length;i++){
						$('.adddiv_settleemp').append(",<br/>"+res.column[i]+":"+res.data[i]);
					}
					
				}
				else if(response.code==1002){
					layer.msg('该员工工资已发放');
				}
				else{
					layer.msg('输入数据有误');
				}
			},function(err){
				layer.msg('请求失败');
			});
	})



}