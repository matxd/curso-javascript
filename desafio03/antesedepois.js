function info () {
    var inteiro = parseInt(prompt("Digite um número inteiro qualquer"))
    var antecessor = inteiro - 1
    var sucessor = inteiro + 1
    var res = alert(`Antes de ${inteiro}, temos o número ${antecessor}.         
Depois de ${inteiro}, temos o número ${sucessor}.`)
}

botao.addEventListener("click", info)