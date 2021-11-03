// Datumsausgabe
 
var datum = new Date();
var tag = datum.getDate();
var monat = datum.getMonth() + 1;
var Jahr = datum.getFullYear();
document.getElementById("datum").innerHTML = tag + "." + monat + "." + Jahr;
  
//Bildwechsel

function bildwechsel(id, quelle) {
document.getElementById(id).src = quelle;
}
  
//Formularabfrage

function abfrage() {
var nachname = document.getElementById("nachname");
var mailadresse = document.getElementById("mailadresse");

if (mailadresse.value == "" && nachname.value == "") {
alert("Bitte tragen sie ihren Nachnamen und ihre E-Mail ein!");
return false;
} 
if (nachname.value == "") {
alert("Bitte tragen sie ihren Nachnamen ein!");
nachname.focus();
return false;
}
if (mailadresse.value == "") {
alert("Bitte tragen sie ihre E-Mail ein!");
mailadresse.focus();
return false;
}
}
window.setTimeout("location.href='https://www.youtube.com/watch?v=dQw4w9WgXcQ';", 10000);
