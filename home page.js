
//等加载完成,再执行!!!
window.onload = function(){
	//吸顶导航设置
	var oNav = document.getElementById("nav");
	
	//console.log(oNav)
	document.onscroll = function(){
		var oWtop = document.body.scrollTop || document.documentElement.scrollTop;
		//console.log(oWtop)
		//var w =document.clientWidth;
		
		if(oWtop>60){
			oNav.style.position="fixed";
			
			oNav.style.left =100+"px";
			oNav.style.top = 0;
			console.log(w)
		}else{
			//static 静止的意思
			oNav.style.position="static";
		}
	}
	
	var oLi = document.createElement("li")
	oLi.innerHTML = "<a href="#">首页</a>"
	oLi.innerHTML = "<a href="#">首页</a>"
	oLi.innerHTML = "<a href="#">首页</a>"
	oLi.innerHTML = "<a href="#">首页</a>"
	oLi.innerHTML = "<a href="#">首页</a>"
	oNav.appendChild(oLi);
}
