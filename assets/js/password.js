let verificar = document.getElementById("verificar")
verificar.addEventListener("click", verificarFunction)

function verificarFunction() {
    let firstDigit = document.getElementById("firstDigit").value
    let secondDigit = document.getElementById("secondDigit").value
    let thirdDigit = document.getElementById("thirdDigit").value
    let password = firstDigit + secondDigit + thirdDigit
    
    if (password == "911") {
        let result = document.getElementById("result")
        result.innerHTML = "Password 1 correcto"
    } else if (password == "714") {
        let result = document.getElementById("result")
        result.innerHTML = "Password 2 correcto"
    } else {
        let result = document.getElementById("result")
        result.innerHTML = "Password incorrecto"
    }
}