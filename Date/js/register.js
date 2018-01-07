//console.log("haha2")
window.onload =function(){
	//console.log("haha1")
	var oUsername = document.getElementById("username")
	var oPassword = document.getElementById("password")
	var oRegister = document.getElementById("register")
	//console.log("haha")
	
	oRegister.onclick = function(){
		
		//验证码验证
		validate();
		
		var strUsername = oUsername.value;
		var strPassword = oPassword.value;
		
		ajaxs({
			//传值：传入一个object的格式对象{
						// 		json:  
						// 		method: 
						// 		cb: 
						// 		url: 
				method:"post",
				url:"http://csit.top/api_user.php",
				json:{
					status:"register",
					username:strUsername,
					password:strPassword
				}
				cb:function(o){
				
				if(obj.code==0){
					if(checkbox.checked==true){
						//跳转首页
					location.href = "#";
					}
					
				}else{
					alert(obj.message)
				}
			
				}
		})
	}
}
//验证码
var code;
//刷新验证码。。
function createCode(){
	code="";
	var codelength =4;
	//var oCode =document.getElementById("code")
	var Mah =document.getElementById("mah");
	//console.log(Mah)
	var Radom =new Array("0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z");
	for(var i=0;i<codelength;i++){
		var index = Math.floor(Math.random()*36);//定义个变量取出随机值下标
		code+=Radom[index];//将下标赋值给code
		//console.log(code)
		
	}
	Mah.value = code;
	//console.log(code)
	Mah.innerHTML = code;
}
//判断用户输入正确性
function validate(){
	var Codes = document.getElementById("codes").value.toUpperCase();
	if(Codes.length<=0){
		alert("请输入验证码");
	}else if(Codes.value!=code){
		alert("验证码有误，请重新输入");
	}else{
		alert("验证码正确，请输入密码");
	}
}
