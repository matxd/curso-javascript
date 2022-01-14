var amigo = {nome: "Matheus", peso: 68.7, idade: 18, engordar(p=0){
    console.log("Engordou")
    this.peso += p
}}
amigo.engordar(2)
console.log("O amigo se chama ${amigo.nome}, pesa ${amigo.peso} e tem ${amigo.idade} anos de idade.")