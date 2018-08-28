var hmeBtn = document.getElementById('hmeBtn');
var menu = document.getElementById('menu');
var menuText = document.getElementsByClassName('menuText');
var mainLogo = document.getElementById('mainLogo');
var logo = document.getElementsByClassName('logo')[0];
var w20 = document.getElementsByClassName('w-20');
var dash = document.getElementById('dash');
var sign = document.getElementById('sign');
var dashboard = document.getElementById('dashboard');
var Signup = document.getElementById('Signup');
var subBtn = document.getElementById('subBtn');


menu.style.width = "20%"
hmeBtn.onclick = function(){

	if(menu.style.width == "20%"){
		menu.style.width  = "5%";
		mainLogo.innerHTML = "<h3> DL </h3>"
		logo.innerText = "Digital Lync";
		for(var i = 0; i < menuText.length; i++){
			menuText[i].style.display = "none";		
		}

		for(var j =0; j < w20.length; j++){
			w20[j].style.width = 35 + "px";
		}
	}else{
		menu.style.width  = "20%";
		mainLogo.innerHTML = "<h3> Digital Lync </h3>"
		logo.innerText = "DL";
		for(var i = 0; i < menuText.length; i++){
			menuText[i].style.display = "inline-block";		
		}

		for(var j =0; j < w20.length; j++){
			w20[j].style.width = 20 + "%";
		}
	}
}


dash.addEventListener('click', function(){
	dashboard.style.display = "block";
	Signup.style.display = "none";
});

sign.addEventListener('click', function(){
	Signup.style.display = "block";
	dashboard.style.display = "none";
});


subBtn.addEventListener('click', function(){
	
});