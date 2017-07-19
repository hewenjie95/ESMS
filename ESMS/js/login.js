$(function(){
	urlmessage();
});


function urlmessage(){
	$('.btn_login').click(function(){
		//检查注册信息完整性
		var user_name = $('.login_name').val();
		var user_password = $('.login_psw').val();
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
				usr: user_name,
				pwd: user_password
		};
		// param = JSON.stringify(param);
		publicDom.post(loginUrl,param,function(response){
				if (response.code == 1001) {
					window.location.href = "manager.html";
				}
				else {
					layer.msg(response.message);
				}
			},function(err){
				layer.msg(response.message);
			});
	})
}