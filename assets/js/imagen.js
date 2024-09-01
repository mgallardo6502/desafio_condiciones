let imagen = document.querySelector("img")
imagen.addEventListener("click", clickFunction)

function clickFunction() {
    if (imagen.style.border == '') {
        imagen.style.border = '1px solid red '
    } else {
        imagen.style.border = ''
    }
}