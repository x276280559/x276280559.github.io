window.onload = function(){
	var oBotn =document.getElementById("botn");
	var oPassword01 =document.getElementById("password01")
	var oPassword02 =document.getElementById("password02")
	//点击事件
	oBotn.onclick = function(){
		var strUsername = oPassword01.value
		var strPassword = oPassword02.value
		console.log("ss");
		var xhr = new XMLHttpRequest()
		xhr.onreadystatechange = function(){
			if(xhr.readyState==4){
				if(xhr.status>=200&&xhr.status<300 ||xhr.status==304){
					var str = xhr.responseText;
					//转换成json对象
					var obj = JSON.parse(str);
					console.log(obj.code);
					if(obj.code ==0){
						alert("注册成功");
					}else{
						alert("注册失败");
					}
				}
				
			}
		}
		xhr.open("post","http://h6.duchengjiu.top/shop/api_user.php", true);
		xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

		xhr.send("usemame = "+ strUsername +"&password" + strPassword + "&status = register")
	}
	
}
