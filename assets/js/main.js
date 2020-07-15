const input = document.getElementById("input")
const position = document.getElementById("position")
const vorne = document.getElementById("vorne")
const hinten = document.getElementById("hinten")
const davor = document.getElementById("davor")
let resultVorne
let resultHinten
function trennen() {
    if (input.value.indexOf(position.value) == -1) {
        resultVorne = "Dieses Zeichen kann"
        resultHinten = "nicht gedunden werden"
    } else {
        if (davor.checked) {
            resultVorne = input.value.slice(0, input.value.indexOf(position.value))
            resultHinten = input.value.slice(input.value.indexOf(position.value))
        } else {
            resultVorne = input.value.slice(0, (input.value.indexOf(position.value) + position.value.length))
            resultHinten = input.value.slice((input.value.indexOf(position.value) + position.value.length))
        }
    }
    vorne.innerHTML = resultVorne
    hinten.innerHTML = resultHinten
}