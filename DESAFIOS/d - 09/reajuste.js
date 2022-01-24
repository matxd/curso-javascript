function reajuste(){
    var nome = prompt("Qual é o nome do funcionário?")
    var salario = Number(prompt(`Qual é o salario de ${nome}`))
    var aumento = prompt(`O salário de ${nome} vai ser reajustado em qual porcentagem?`)
    var vPorcentagem = aumento / 100 * salario
    var sFinal = vPorcentagem + salario

    resultado.innerHTML = `<strong>${nome} recebeu um aumento salarial!</strong>`
    resultado.innerHTML += `<p>O salário atual era <strong>R$${salario}.</strong></p>`
    resultado.innerHTML += `<p>Com um aumento de ${aumento}%, o salário vai aumentar <strong>R$${vPorcentagem}</strong> no próximo mês.</p>`
    resultado.innerHTML += `<p>E a partir daí, <strong>${nome}</strong> vai passar a ganhar <strong>R$${sFinal}.</strong></p>`
}