window.onload = function(){
	var oLit= document.getElementById("div");
	console.log(oLit)
	var oInpt= oLit.getElementsByTagName(input)[0];
	var oSpan = document.createElement("span");
	oSpan.onclick = function(){
		console.log(1)
		oInpt.style.display ="block";
	}
	
}