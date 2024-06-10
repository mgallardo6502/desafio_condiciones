document.getElementById("dlLogo").addEventListener("click", addBorder);
var counter = 0;

function addBorder() {
    counter++;
    if (counter == 1) {
        document.getElementById("dlLogo").style.border = "2px solid red";
    } else {
        counter = 0;
        document.getElementById("dlLogo").style.border = "none";
    }
}