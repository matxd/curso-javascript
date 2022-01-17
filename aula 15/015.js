// LEMBRE-SE DE ADICIONAR COMENTARIOS PARA EXECUTAR OS CODIGOS INDIVIDUAIS
// Um array/vetor é uma variavel que tem varios elementos e cada elemento tem o seu valor e sua chave/indice.

var numeros = [35, 15, 25, 10] // array/vetor
numeros.push(1) // adicionando um elemento e seu valor automaticamente
numeros.sort() // sort organiza os valores em ordem crescente

console.log(`O array é: ${numeros}`)
console.log(`O array tem ${numeros.length} posições/elementos`) // length é o cumprimento do vetor

var posicoes = numeros.indexOf(1)
if (posicoes == -1) { // -1 é quando o JavaScript nao encontra o valor pedido
    console.log ("Valor não encontrado")
} else {
    console.log (`A posição deste valor é: ${posicoes}`)
}

// for usado para exibir os valores de cada elemento
for (var elemento=0; elemento<numeros.length; elemento++) { 
    console.log(`O indice ${elemento} tem o valor ${numeros[elemento]}`)
}

// for usado de forma otimizada e simplificada com o mesmo resultado
for (var elemento in numeros) { // para cada posição em numeros vai ser exibido numeros elemento
    console.log(`O indicie ${elemento} tem o valor ${numeros[elemento]}`)
}

