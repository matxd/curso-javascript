var cotDolar = prompt("Qual a cotação do dólar neste momento?")

function convMoeda(){
    var reais = prompt("Insira o valor em R$ que deseja converter!")
    var converter = reais / cotDolar

    resultado.innerHTML = `A quantia de <strong>R$${reais}</strong> é aproximadamente <strong>U$${parseInt(converter)}</strong> na cotação atual.`
}
