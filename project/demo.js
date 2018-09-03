// selector , event, callbackFn;

var hmeBtn = document.getElementById('hmeBtn');
var menu = document.getElementById('menu');
var mainLogo = document.getElementById('mainLogo');
var menuText = document.getElementsByClassName('menuText');
var mainBind =  document.getElementById('mainBind');

var updateBtn = document.getElementById('updateBtn');
var restBtn = document.getElementById('restBtn');

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
var genError = document.getElementById('genError');

/*dash.onclick = function(){

}*/

// dashboard.style.display = "none";
dash.addEventListener('click', function(){
	// if(dashboard.style.display == "none"){
		Signup.style.display = "none";
		dashboard.style.display = "block";
	// }
	
});





// submit

var subBtn = document.getElementById('subBtn');
var canBtn = document.getElementById('canBtn');

// form Data
var uname = document.getElementById('uname');
var Email = document.getElementById('email');
var contact = document.getElementById('contact');
var country = document.getElementById('country');
var gender = document.getElementsByClassName('gender');
var count = 0;





sign.addEventListener('click', function(){
	// if(Signup.style.display == "none")
		dashboard.style.display = "none";
		Signup.style.display = "block";
		

		updateBtn.style.display = "none";
		restBtn.style.display = "none";
		subBtn.style.display = "inline";
		canBtn.style.display = "inline";


		uname.value = "";
		Email.value = "";	
		contact.value = "";
		country.value = "none";
		for(var i = 0; i  < gender.length; i++){
				if(gender[i].checked == true){
					gender[i].checked = false;
				}
			}



});





genFlag1 = "";
subBtn.addEventListener('click', function(){
	
var genFlag = false;
// debugger

for(var gen = 0; gen < gender.length; gen++){
	if(gender[gen].checked == true){
		genFlag = true;
	}
}

var Char = /^[a-zA-Z]{3,}$/g;
var Num = /^[0-9]{10}$/g;
var EmailReg = /^[a-zA-Z\.0-9]+@+[a-zA-Z]+\.+[a-zA-Z]{2,5}$/g;


if(!Char.test(uname.value)){
	alert('name');
	uname.setAttribute('class', 'error');
}else if(!EmailReg.test(Email.value)){
	alert('Email');
	uname.removeAttribute('class', 'error');
	Email.setAttribute('class', 'error');
}else if(!Num.test(contact.value)){
	alert('contact');
	uname.removeAttribute('class', 'error');
	Email.removeAttribute('class', 'error');
	contact.setAttribute('class', 'error');
}else if(country.value == "none"){
	alert('country');
	uname.removeAttribute('class', 'error');
	Email.removeAttribute('class', 'error');
	contact.removeAttribute('class', 'error');
	country.setAttribute('class', 'error');
}else if(!genFlag){
	uname.removeAttribute('class', 'error');
	Email.removeAttribute('class', 'error');
	contact.removeAttribute('class', 'error');
	country.removeAttribute('class', 'error');
	alert('gender');
	genError.style.display = "inline";
}else{
		genError.style.display = "none";
		alert('success');
		count++;
	// Form Values
		// console.log(uname.value);
		// console.log(Email.value);
		// console.log(contact.value);
		// console.log(country.value);



	// create Elements

	var Tr = document.createElement('tr');
		var slNo = document.createElement('td');
		var TdName = document.createElement('td');
		var TdEmail = document.createElement('td');
		var TdContact = document.createElement('td');
		var TdCountry = document.createElement('td');
		var TdGender = document.createElement('td');
			var TdEdit = document.createElement('td');
			var EditBtn = document.createElement('button');
			var DelBtn = document.createElement('button');
			EditBtn.innerHTML = '<i class="fas fa-edit clr-green"></i>';
			DelBtn.innerHTML = '<i class="fas fa-trash clr-red"></i>';

			// Adding Attributes;

			/*EditBtn.className = "editBtn";
			DelBtn.className = "delBtn";*/

			EditBtn.setAttribute('class', 'editBtn');
			DelBtn.setAttribute('class', 'delBtn');

			EditBtn.setAttribute('id', 'DemoId');
			DelBtn.id = 'DelDemoId';


			console.log(EditBtn +"\n"+ DelBtn);
			/*
				ele.id = 'idName';
				ele.href = "link";
				ele.src = "src";

				
				

			*/



	// adding Content..

		slNo.innerText = count;
		TdName.innerText = uname.value;
		TdEmail.innerText = Email.value;
		TdContact.innerText = contact.value;
		TdCountry.innerText = country.value;
		TdEdit.appendChild(EditBtn);
		TdEdit.appendChild(DelBtn);

		// TdEdit.innerHTML = '<i class="fas fa-edit clr-green"></i><i class="fas fa-trash clr-red"></i>';



		for(var i = 0; i  < gender.length; i++){
			if(gender[i].checked == true){
				TdGender.innerText = gender[i].value;
			}
		}

		// console.log(slNo.innerText +"\n"+ TdGender.innerText)



		// Append Content to Parent.
			// parent.appendChild(child);

		Tr.appendChild(slNo);
		Tr.appendChild(TdName);
		Tr.appendChild(TdEmail);
		Tr.appendChild(TdContact);
		Tr.appendChild(TdCountry);
		Tr.appendChild(TdGender);
		Tr.appendChild(TdEdit);
		console.log(Tr);
		mainBind.appendChild(Tr);



	uname.value = "";
	Email.value = "";	
	contact.value = "";
	country.value = "none";
	for(var i = 0; i  < gender.length; i++){
			if(gender[i].checked == true){
				gender[i].checked = false;
			}
		}


		EditBtn.onclick = function(){
			// alert(TdName.innerText);
			updateBtn.style.display = "inline";
			restBtn.style.display = "inline";
			subBtn.style.display = "none";
			canBtn.style.display = "none";
			dashboard.style.display = "none";
			Signup.style.display = "block";
			console.log(this.parentNode.parentNode);
			


			var EditName = this.parentNode.parentNode.children[1];
			var EditEmail = this.parentNode.parentNode.children[2];
			var EditContact = this.parentNode.parentNode.children[3];
			var EditCountry = this.parentNode.parentNode.children[4];
			var EditGender = this.parentNode.parentNode.children[5];


			uname.value = EditName.innerText;
			Email.value = EditEmail.innerText;	
			contact.value = EditContact.innerText;
			country.value = EditCountry.innerText;
			for(var i = 0; i  < gender.length; i++){
					if(EditGender.innerText == gender[i].value){
						gender[i].checked = true;
					}
					// gender[i].value = EditGender;
				}




		updateBtn.onclick = function(){
			EditName.innerText = uname.value;
			EditEmail.innerText = Email.value;
			EditContact.innerText = contact.value;
			EditCountry.innerText = country.value;
			for(var i = 0; i  < gender.length; i++){
					if(gender[i].checked = true){
						EditGender.innerText = gender[i].value
					}
					// gender[i].value = EditGender;
				}

			}


		}

		DelBtn.onclick = function(){
			var Trdelete = this.parentNode.parentNode;
			mainBind.removeChild(Trdelete);

		}



		restBtn.onclick = function(){
			dashboard.style.display = "block";
			Signup.style.display = "none";
			updateBtn.style.display = "none";
			restBtn.style.display = "none";
			subBtn.style.display = "inline";
			canBtn.style.display = "inline";



			uname.value = "";
			Email.value = "";	
			contact.value = "";
			country.value = "none";
			for(var i = 0; i  < gender.length; i++){
					if(gender[i].checked == true){
						gender[i].checked = false;
					}
				}

		};

	}
});

canBtn.onclick = function(){
	uname.value = "";
	Email.value = "";	
	contact.value = "";
	country.value = "none";
	for(var i = 0; i  < gender.length; i++){
			if(gender[i].checked == true){
				gender[i].checked = false;
			}
		}
}








function hidenText(cls){
	for(var i = 0; i < cls.length; i++){
		if(cls[i].style.display == "inline-block"){
			cls[i].style.display = "none";
		}else{
			cls[i].style.display = "inline-block";
		}
	}
}