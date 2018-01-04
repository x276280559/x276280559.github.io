window.onload = function(){
	var oUsername = document.getElementById("txt01");
	var oPassword = document.getElementById("txt02");
	var oOntex = document.getElementById("txt04");
	//console.log(oOntex)
	//console.log(oPassword)
	//console.log(oUsername)
	oOntex.onclick = function(){
			//console.log(1)
		var strUsername = oUsername.value
		var strPassword = oPassword.value
		//console.log(strUsername)
		//console.log(strPassword)
        fengzhuang({
				status: "login",
				username: strUsername,
				password: strPassword
			});
	}	
}