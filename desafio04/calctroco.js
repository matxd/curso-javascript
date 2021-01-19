function comprando () {
    var produto = window.prompt("Qual produto você está comprando?")
    var preco = parseInt(window.prompt(`Quanto custa o(a) ${produto} que você está comprando?`))
    var pagou = parseInt(window.prompt(`Qual foi o valor que você deu para comprar esse(a) ${produto}?`))
    var troco = pagou - preco 
    var msgfinal = parseInt(window.alert(`Você comprou um(a) ${produto} que custou R$ ${preco}. 
Deu R$ ${pagou} em dinheiro e vai receber R$ ${troco} de troco.
Volte sempre!`))
}

