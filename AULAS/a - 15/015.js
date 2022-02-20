var numeros = [35, 15, 25, 10] 
numeros.push(1) 
numeros.sort() 

console.log(`O array é: ${numeros}`)
console.log(`O array tem ${numeros.length} posições/elementos`) 

var posicoes = numeros.indexOf(1) 
if (posicoes == -1) { 
    console.log ("Valor não encontrado")
} else {
    console.log (`A posição deste valor é: ${posicoes}`)
}

for (var elemento=0; elemento<numeros.length; elemento++) { 
    console.log(`O indice ${elemento} tem o valor ${numeros[elemento]}`)
}

for (var elemento in numeros) { 
    console.log(`O indicie ${elemento} tem o valor ${numeros[elemento]}`)
}

