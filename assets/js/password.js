document.getElementById("btnPassword").addEventListener("click", passwordFunciton);
var firstDigit = 0;
var secondDigit = 0;
var thirdDigit = 0;
var sumPassword = 0;
var password = 0;

function passwordFunciton() {
    firstDigit = document.getElementById("firstDigit").value;
    secondDigit = document.getElementById("secondDigit").value;
    thirdDigit = document.getElementById("thirdDigit").value;
    sumPassword = firstDigit + secondDigit + thirdDigit;

    if (sumPassword == 911) {
        password = document.getElementById("password").innerHTML = "¡Password 1 ingresado correctamente!";
    } else if (sumPassword == 714) {
        password = document.getElementById("password").innerHTML = "¡Password 2 ingresado correctamente!";
    } else {
        password = document.getElementById("password").innerHTML = "El Password ingresado es incorrecto.";
    }
}