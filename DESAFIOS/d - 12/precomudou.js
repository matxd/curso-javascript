function verificacao(){
    var precoAnterior = Number(prompt("Qual era o preço anterior do produto?"))
    var precoAtual = Number(prompt("Qual é o preço atual do produto?"))
    var precoDiferenca = [precoAtual - precoAnterior, precoAtual * 100 / precoAnterior - 100]

    if (precoAtual > precoAnterior){
        resultado.innerHTML = `<p>O produto custava R$ ${precoAnterior}> e agora custa R$ ${precoAtual}.</p>`
        resultado.innerHTML += `<p>Hoje o produto está mais caro.</p>`
        resultado.innerHTML += `<p>O preço subiu R$ ${precoDiferenca[0]} em relação ao preço anterior.</p>`
        resultado.innerHTML += `<p>Uma variação de ${precoDiferenca[1]}% pra cima.</p>`
    } else {
        resultado.innerHTML = `<p>O produto custava R$ ${precoAnterior} e agora custa R$ ${precoAtual}.</p>`
        resultado.innerHTML += `<p>Hoje o produto está mais barato.</p>`
        resultado.innerHTML += `<p>O preço caiu R$ ${precoDiferenca[0]} em relação ao preço anterior.</p>`
        resultado.innerHTML += `<p>Uma variação de ${precoDiferenca[1]}% pra baixo.</p>`
    }
}