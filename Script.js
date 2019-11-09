function validate() {
var username = document.getElementById("username").value;   
var password = document.getElementById("password").value;
if ( username == "imfullstack@imawesome.com" && password == "cool"){
alert ("Login successfully");
alert ("Welcome");
window.location = "https://www.google.com";
return false;
}
else{
alert("User not found");
return false;
}
}