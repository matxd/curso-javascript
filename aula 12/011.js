var idade = 15
console.log("Você tem ${idade} anos de idade.")

 if (idade < 16) {
    console.log("Não vota.")
} else if (idade < 18 || idade > 65) { // || se lê ' ou '
    console.log("Voto opcional.")
} else {
    console.log("Voto obrigatorio.")
}     // condição aninhada
