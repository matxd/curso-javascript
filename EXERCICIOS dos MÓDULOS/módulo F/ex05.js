var vNumero = document.getElementById("numero")
var vLista = document.getElementById("lista")
var resultado = document.getElementById("resultado")
var valores = []

function inserir(){
    if (isNumero(vNumero.value) && !inLista(vNumero.value, valores)) {
        valores.push(Number(vNumero.value))
        var item = document.createElement("option")
        item.text = `Valor ${vNumero.value} foi inserido!`
        vLista.appendChild(item)
        resultado.innerHTML = ""
    } else {
        window.alert("Valor invalido ou inserido!")
    }
    vNumero.value = ""
    vNumero.focus()
}

function analisar(){
    if (valores.length == 0) {
        window.alert("Insira um valor antes de analisar!")
    } else {
        var total = valores.length
        var maior = valores[0]
        var menor = valores[0]
        var soma = 0
        var media = 0

        for(var pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
        }

        media = soma / total
        
        resultado.innerHTML = ""
        resultado.innerHTML += `<p>No momento temos ${total} numeros inseridos.</p>`
        resultado.innerHTML += `<p>O maior valor inserido foi ${maior}.</p>`
        resultado.innerHTML += `<p>O menor valor inserido foi ${menor}.</p>`
        resultado.innerHTML += `<p>A soma desses numeros é: ${soma}</p>`
        resultado.innerHTML += `<p>A média dos numeros é: ${media}</p>`
    }
}

function isNumero(n){
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l){
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}