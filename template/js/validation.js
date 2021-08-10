function validate() {
	var sub=false;
		var filtrer=/^([a-zA-Z0-9]{1,9})+\@+([a-zA-Z]{1,9})+\.+([a-zA-Z]{2,4})+$/;
		var login=document.getElementById('slogin');
		if (login.value=="") {
			document.getElementById('sLgValide').style.display="none";
			document.getElementById('sLgVide').style.display="block";
			document.getElementById('slogin').focus();
			sub=false;		
		}
		else{
			document.getElementById('sLgVide').style.display="none";
			if (!filtrer.test(login.value)) 
			{
				document.getElementById('sLgValide').style.display="block";
				document.getElementById('slogin').focus();
				sub=false;
			}
			else{
				document.getElementById('sLgVide').style.display="none";
				document.getElementById('sLgValide').style.display="none";
				sub=true;
			}
		}
		var pwd=document.getElementById('spwd');
		if (pwd.value=="") {
			document.getElementById('spwdVide').style.display="block";	
			document.getElementById('spwd').focus();
			sub=false;	
		}
		else{
			document.getElementById('spwdVide').style.display="none";
		}
		if (sub==true) {
			document.sign.submit();
		}

	}
function CompteValidate() {
	var sub=false;
	// input de nom
	var filtrerName=/[a-zA-Z]{1,10}/;
	var name=document.getElementById('nom');
	if (name.value=="") {
		document.getElementById('NameValide').style.display="none";
		document.getElementById('NameVide').style.display="block";
		sub=true;
	}
	else{
		document.getElementById('NameVide').style.display="none";
		if (!filtrerName.test(name.value)) 
		{
			document.getElementById('NameValide').style.display="block";
			sub=true;
		}
		else{
			document.getElementById('NameValide').style.display="none";
			sub=false;
		}
	}
	// input de email
	var filtrer=/^([a-zA-Z0-9]{1,9})+\@+([a-zA-Z]{1,9})+\.+([a-zA-Z]{2,4})+$/;
	var login=document.getElementById('login');
	if (login.value=="") {
		document.getElementById('LgValide').style.display="none";
		document.getElementById('LgVide').style.display="block";
		sub=true;	
	}
	else{
		document.getElementById('LgVide').style.display="none";
		if (!filtrer.test(login.value)) 
		{
			document.getElementById('LgValide').style.display="block";
			sub=true;
		}
		else{
			document.getElementById('LgVide').style.display="none";
			document.getElementById('LgValide').style.display="none";
			sub=false;
		}
	}

	// input de poste
	var pos=document.getElementById('diplome');
	if (pos.value=="") {
		document.getElementById('DpVide').style.display="block";
		sub=true;
	}
	else{
		document.getElementById('DpVide').style.display="none";
		sub=false;
	}
	// mot de pass
	var pwd=document.getElementById('pwd');
	if (pwd.value=="") {
		document.getElementById('pwdVide').style.display="block";
		sub=true;
	}
	else{
		document.getElementById('pwdVide').style.display="none";
		sub=false;
	}
	// confirmation de mot de pass
	var con=document.getElementById('Conpwd');
	if (con.value=="") {
		document.getElementById('ConpwdVide').style.display="block";
		sub=true;	
	}
	else{
		document.getElementById('ConpwdVide').style.display="none";
		if (pwd.value!=con.value) {
			document.getElementById('ConValide').style.display="block";	
			sub=true;	
		}
		else{
			document.getElementById('ConValide').style.display="none";
			document.getElementById('pwdVide').style.display="none";
			sub=false;
		}
	}
	if (sub==false) {
			toast();
		}

}
function toast() {
	// Get the snackbar DIV
	var x = document.getElementById("snackbar")

	// Add the "show" class to DIV
	x.className = "show";

	// After 3 seconds, remove the show class from DIV
	setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}