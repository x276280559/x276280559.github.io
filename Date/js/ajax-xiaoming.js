//写于日期：1月7号。
//文档释义：
//用途:登陆或注册函数的函数封装。
//传值：传入一个object的格式对象{
						// 		json:  
						// 		method: 
						// 		cb: 
						// 		url: 
						//	}
		//将obj转换为字符串传入send中:
			//obj 是一个对象
		// 		json:  数据
		// 		method: 请求方式 GET/POST
		// 		cb: 回调函数
		// 		url: 请求地址


		//          参数传值介绍：（      
		//    						json json对象  是要发送给服务器的数据
		//    						cb   函数           回调函数。 收到数据之后主动通知这个函数
								

function getParams(json){
	
	var str = ""
	//注释：循环遍历成    ---拼接成k=obj[k]&k=obj[k]&k=obj[k]
	for(var k in obj){
		str += k
		str += "="
		str += obj[k]
		str += "&"
	}
	//str的方法，去掉最后一个&
	var str = str.substring(0,str.length-1)
	
	
	
	
}

//封装整体：
function ajaxs(obj){
	// 创建请求对象
	var xhr = new XMLHttpRequest();
	
	xhr.onreadystatechange = function(){
		
		if(xhr.readyState==4 && xhr.status == 200){
			
			var str =xhr.responseText;
			var o =JSON.parse(str);
			// 将获取回来的数据传递给回调函数
			obj.cb(o);
		}
	}
	if(obj.method == "get"){
		obj.url += "?"
		obj.url += "obj.getParams(obj.json)"
	}
	xhr.open(obj.method,obj.url,true);
	if(obj.method == "get"){
		xhr.send()
	}else{
		//post设置请求头
		xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
		// obj.json JSON数据对象
		// getParams 自己定义的函数，用于将JSON对象转换成查询字符串
		var str = getParams(obj.json)
		
		// 发送数据到后台服务器
		xhr.send(str)
	}
}
