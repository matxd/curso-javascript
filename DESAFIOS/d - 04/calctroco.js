function comprar(){
    var produto = prompt("Qual produto você está comprando?")
    var preco = prompt(`Quanto custa o(a) ${produto} que você está comprando?`)
    var pagou = prompt(`Qual foi o valor que você deu para comprar esse(a) ${produto}?`)
    var troco = pagou - preco

    alert(`Você comprou um(a) ${produto} que custou R$ ${preco}. 
    Deu R$ ${pagou} em dinheiro e vai receber R$ ${troco} de troco. 
    Volte sempre!`)
}

