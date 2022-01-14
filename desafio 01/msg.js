var botao1 = document.getElementById("botao1")
var botao2 = document.getElementById("botao2")
var botao3 = document.getElementById("botao3")

function msg1 () {
    window.alert("Você clicou no 1° botão!")
}

function msg2 () {
    window.alert("Você clicou no 2° botão!")
}

function msg3 () {
    window.alert("Você clicou no 3° botão!")
}

botao1.addEventListener("click", msg1)
botao2.addEventListener("click", msg2)
botao3.addEventListener("click", msg3)