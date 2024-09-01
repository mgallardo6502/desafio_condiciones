let button = document.getElementById("verificar")
button.addEventListener("click", verificarFunction)

function verificarFunction () {
    let value1 = document.getElementById("sticker1").value
    let value2 = document.getElementById("sticker2").value
    let value3 = document.getElementById("sticker3").value

    let result = Number(value1) + Number(value2) + Number(value3)
    let pTotal = document.getElementById("total")

    if (result > 10 ) {
        pTotal.innerHTML = "Llevas demasiados stickers"
    } else if (result >= 0 && result <= 10) {
        pTotal.innerHTML = "Llevas " + result + " Stickers"
    } else {
        pTotal.innerHTML = "Debes seleccionar al menos un sticker"
    }
}