var publicDom = {
	isDebug:true,
	base_url:'http://esms.s1.natapp.cc/',
	// 获取url的参数
	getParamByUrl: function() {
	   var url = window.location.search; //获取url中"?"符后的字串
	   var theRequest = {};
	   if (url.indexOf("?") !== -1) {
	      var str = url.substr(1),
	      	  strs = str.split("&");
	      for(var i = 0; i < strs.length; i ++) {
	         theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
	      }
	   }
	   return theRequest;
	},
	myAjax: function (type, url, data, callback1, callback2, isAsync) {
		var async = (typeof isAsync != 'undefined')? isAsync: true;
		$.ajax({
			async: async,
			type: type,
			cache:false,
			url: url,
			data: data,
			contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
			success: function(json) {
				if(callback1 != '') { callback1(json); }
			},
			error: function(XMLHttpRequest, textStatus, errorThrown) {
				if(callback2 != '') { callback2(XMLHttpRequest, textStatus, errorThrown); }
			}
		});
	},
	post:function(url,data,successCallback,errorCallback){
		if (data == null || data == undefined){
			data =  {};
		}
		if (data.t == undefined || data.t == null ){
			data.t = publicDom.token;
		}
		publicDom.myAjax("post",publicDom.base_url+url,data,successCallback,errorCallback,false);
	}
};
