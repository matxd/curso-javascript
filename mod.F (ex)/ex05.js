var vnumero = document.getElementById("numero")
var vlista = document.getElementById("lista")
var resultado = document.getElementById("resultado")
var valores = []

function isNumero (n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista (n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function inserir () {
    if (isNumero(vnumero.value) && !inLista(vnumero.value, valores)) {
        
    } else {
        window.alert("Valor invalido ou inserido!")
    }
}