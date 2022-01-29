function anoBissexto(){
    var ano = Number(prompt("Qual é o ano que você quer verificar?"))
    
    resultado.innerHTML = `Analisando o ano de ${ano}...`

    if (ano % 4 == 0 && ano % 100 != 0 || ano % 400 == 0){
        resultado.innerHTML += `<p>O ano de ${ano} É BISSEXTO &#9989;</p>`
    } else {
        resultado.innerHTML += `<p>O ano de ${ano} NÃO É BISSEXTO &#10060;</p>`
    }
}