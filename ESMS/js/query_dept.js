$('.choseQuerydept').on('click',function(){
	querydept();
});


function querydept(){
	$('.btn_query_dept').click(function(){
		
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
				query: eptcondition
		};
		// param = JSON.stringify(param);
		publicDom.post(loginUrl,param,function(response){
				if (response.code == 1001) {
					$('.dept_manage_div').append("<div class="panel panel-default hide_adddiv adddiv_querydept">"+
						"<div class="panel-heading">部门信息</div>"+
						"<table class="table addtr_querydept">"+
						"<tbody><tr><th>编号</th><th>名称</th><th>所在地</th></tr></tbody>"+	
						"</table></div>");
					var dept = response.data;
					for( var i=0;i < dept.length;i++ ){
						$('.addtr_querydept').append(
							"<tr><td>dept[i].deptno</td><td>dept[i].dname</td><td>dept[i].loc</td></tr>");
					}
					
				}
				else {
					layer.msg(response.message);
				}
			},function(err){
				layer.msg(response.message);
			});
	})
}