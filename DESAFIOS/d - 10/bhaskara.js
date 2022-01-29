function calculoBhaskara(){
    var a = Number(prompt("Qual é o valor de a?"))
    var b = Number(prompt("Qual é o valor de b?"))
    var c = Number(prompt("Qual é o valor de c?"))
    var delta = b ** 2 - 4 * a * c 

    resultado.innerHTML = `<p>A equação atual é <strong>${a}x² + ${b}x + ${c} = 0</strong></p>`
    resultado.innerHTML += `<p>O cálculo realizado será <strong>Δ = ${b}² - 4 . ${a} . ${c}</strong></p>`
    resultado.innerHTML += `<p>O valor calculado foi <strong>Δ = ${delta}</strong></p>`
}