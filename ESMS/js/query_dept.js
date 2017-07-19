$(function(){
	urlmessage();
});


function urlmessage(){
	$('.btn_query_dept').click(function(){
		
		var deptno = $('.get_Deptno').val();
		var dname = $('.get_Dname').val();
		var loginUrl = 'esms/login';
		if($('.login_name').val()==""&&$('.login_psw').val()==""){
			layer.msg('账号密码不能为空！',function(){
				return false;
			});
			return false;
		};
		if($('.login_name').val()==""&&$('.login_psw').val()!=""){
			layer.msg('账号不能为空！',function(){
				return false;
			});
			return false;
		};
		if($('.login_name').val()!=""&&$('.login_psw').val()==""){
			layer.msg('密码不能为空！',function(){
				return false;
			});
			return false;
		};
		if($('.login_name').val().length>10){
			layer.msg('账号长度不能大于20',function(){
				return false;
			});
			return false;
		};
		/*console.log(user_name);
		console.log(user_password);*/
		var param = {
				usr: deptno,
				pwd: dname
		};
		// param = JSON.stringify(param);
		publicDom.post(loginUrl,param,function(response){
				if (response.code == 1001) {
					$('dept_manage_div').append("<div class=""></div>");
				}
				else {
					layer.msg(response.message);
				}
			},function(err){
				layer.msg(response.message);
			});
	})
}