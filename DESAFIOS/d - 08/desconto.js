function desconto(){
    var produto = prompt("Qual é o produto que você está comprando?")
    var preco = prompt(`Qual é o preço do(a): ${produto}`)
    var desconto = preco * 0.10
    var precoF = preco - desconto

    resultado.innerHTML = `<p><strong>Calculando desconto de 10% para ${produto}!</strong></p>`
    resultado.innerHTML += `<p>O preço original era de: <strong>R$ ${preco}</strong>.</p>`
    resultado.innerHTML += `<p>Você acaba de ganhar <strong>R$ ${desconto}</strong> de desconto (-10%).</p>`
    resultado.innerHTML += `No fim, você vai pagar <strong>R$ ${precoF}</strong> no produto <strong>${produto}</strong>.`
}