let signup = document.getElementsByID("signup"); 
let signIn = document.getElementsByID("signIn"); 
let nameInput = document.getElementsByID("nameInput"); 
let title = document.getElementsByID("title");

signIn.oneclick = function() {
    nameInput.style.maxHeight = "0";
    tilte.innerHTML = "ingresar";
    signup.classlist.add("disable");
    signIn.classlist.remove("enable");    
}

signup.oneclick = function() {
    nameInput.style.maxHeight = "60px";
    tilte.innerHTML = "registrarse";
    signup.classlist.remove("disable");
    signIn.classlist.add("enable");    
}
