// selector , event, callbackFn;

var hmeBtn = document.getElementById('hmeBtn');
var menu = document.getElementById('menu');
var mainLogo = document.getElementById('mainLogo');
var menuText = document.getElementsByClassName('menuText');

// element.addEventListener('click', function demo(){}, true/false);

for(var j =0; j < menuText.length; j++){
	menuText[j].style.display = "inline-block";
}


hmeBtn.addEventListener('click', homeBtnCLick, false);

menu.style.width = '20%';
function homeBtnCLick(){

	if(menu.style.width == '20%'){
		menu.style.width = '75px';
		mainLogo.innerHTML = "DL"
	}else{
		menu.style.width = '20%';
		mainLogo.innerHTML = "Digital Lync"
	}

	hidenText(menuText);
}

// Dashboard, Signup

var dash = document.getElementById('dash');
var sign = document.getElementById('sign');

var dashboard = document.getElementById('dashboard');
var Signup = document.getElementById('Signup');


/*dash.onclick = function(){

}*/

// dashboard.style.display = "none";
dash.addEventListener('click', function(){
	// if(dashboard.style.display == "none"){
		Signup.style.display = "none";
		dashboard.style.display = "block";
	// }
	
});


sign.addEventListener('click', function(){
	// if(Signup.style.display == "none")
		dashboard.style.display = "none";
		Signup.style.display = "block";

});


// submit

var subBtn = document.getElementById('subBtn');
var canBtn = document.getElementById('canBtn');
var uname = document.getElementById('uname');

subBtn.addEventListener('click', function(){
	console.log(uname.value);

});












function hidenText(cls){
	for(var i = 0; i < cls.length; i++){
		if(cls[i].style.display == "inline-block"){
			cls[i].style.display = "none";
		}else{
			cls[i].style.display = "inline-block";
		}
	}
}