/*------------------------------------------------部门管理-------------------------------*/
$('.choseQuerydept').on('click',function(){
	$('.query_dept').show();
	$('.add_dept').hide();
});
$('.choseAdddept').on('click',function(){
	$('.add_dept').show();
	$('.query_dept').hide();
});

/*-------------------------------------------------岗位管理------------------------------*/
$('.choseQueryjob').on('click',function(){
	$('.query_job').show();
	$('.add_job').hide();
});
$('.choseAddjob').on('click',function(){
	$('.add_job').show();
	$('.query_job').hide();
});

/*-------------------------------------------------员工管理------------------------------*/
$('.choseQueryemp').on('click',function(){
	$('.query_emp').show();
	$('.add_emp').hide();
});
$('.choseAddemp').on('click',function(){
	$('.add_emp').show();
	$('.query_emp').hide();
});

/*-------------------------------------------------固定工资管理------------------------------*/
$('.choseQuery_regularsal').on('click',function(){
	$('.query_regularsal').show();
	$('.updata_regularsal').hide();
});
$('.choseUpdata_regularsal').on('click',function(){
	$('.updata_regularsal').show();
	$('.query_regularsal').hide();
});

/*-------------------------------------------------导入项目管理------------------------------*/
$('.choseQuery_enterdata').on('click',function(){
	$('.query_enterdata').show();
	$('.updata_enterdata').hide();
});
$('.choseUpdata_enterdata').on('click',function(){
	$('.updata_enterdata').show();
	$('.query_enterdata').hide();
});

/*-------------------------------------------------工资结算------------------------------------------*/
