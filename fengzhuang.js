//仅限传JSON格式,如：status: "login",username: strUsername,password: strPassword
function fengzhuang(json){
		
	
		
			var xhr = new XMLHttpRequest();
			xhr.onreadystatechange = function(){
				if(xhr.readyState==4){
					if(xhr.status>200&&xhr.status<300 ||xhr.status==304){
						//取回服务器返回的参数
						var str = xhr.responseText;
						//将数据字符串转化成JSON对象
						var obj= JSON.parse(str)
						if(obj.code==0){
							alert(obj.Message)
							location.href = "#";
						}else{
							alert(obj.Message)
						}
					}
				}
				
			}
			xhr.open("POST","https://csit.top/api_user.php",true)
			xhr.setRequestHeader("content-type","application/x-www-form-urlencoded");
			var obj = json
			var str = '';
			for(var k in obj){
				str += k;
				str += "="
				str += obj[k];
				str += "&"
			}
			str = str.substring(0,str.length-1);
			console.log(str)
			xhr.send(str)
		
	}	