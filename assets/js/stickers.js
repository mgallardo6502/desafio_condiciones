document.getElementById("btnTotal").addEventListener("click", btnTotal);
var qtySticker01 = 0;
var qtySticker02 = 0;
var qtySticker03 = 0;
var stickersTotal = 0;
var total = 0;

function btnTotal() {
    qtySticker01 = document.getElementById("Sticker01").value;
    qtySticker02 = document.getElementById("Sticker02").value;
    qtySticker03 = document.getElementById("Sticker03").value;
    stickersTotal = Number(qtySticker01) + Number(qtySticker02) + Number(qtySticker03);

    if (stickersTotal <= 0) {
    total = document.getElementById("total").innerHTML = "Debes seleccionar una cantidad mayor a 0.";
    } else if (stickersTotal > 0 && stickersTotal <= 10) {
       total = document.getElementById("total").innerHTML = "¡Llevas " + stickersTotal + " stickers!";
    } else {
       total = document.getElementById("total").innerHTML = "Llevas muchos stickers.";
    }
}