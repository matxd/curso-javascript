function contagem () {
    var inicio = document.getElementById("inicio")
    var fim = document.getElementById("fim")
    var passo = document.getElementById("passo")
    var resultado = document.getElementById("resultado")

if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        resultado.innerHTML = "Impossivel contar."
        window.alert("Verifique os dados!")
    } else {
        resultado.innerHTML = "Contando: "
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        
        if (p <= 0 ) {
            window.alert("Passo invalido, considerando passo 1")
            p = 1
        }
        if (i < f) {
            for (var contagem = i; contagem <= f; contagem += p) { // contagem crescente
                resultado.innerHTML += ` ${contagem} \u{1F449}`
        }
    } else {
            for (var contagem = i; contagem >= f; contagem -= p) { // contagem decrescente
                resultado.innerHTML += ` ${contagem} \u{1F449}`
            }
        }
        resultado.innerHTML += `\u{1F3C1}`
    }
}