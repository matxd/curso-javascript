// LEMBRE-SE DE ADICIONAR COMENTARIOS PARA EXECUTAR OS CODIGOS INDIVIDUAIS

function parImpar(numero){ // () parametro formal recebe o valor do parametro real
    if (numero % 2 == 0) {
        return "par"
    } else {
        return "impar"
    }
}

var resultado = parImpar(10) // () parametro real é jogado pra dentro do parametro formal
console.log(`O numero é ${resultado}!`)

// ---------

function soma(num1 = 0, num2 = 0){ // () função com dois parametros 
    return num1 + num2
}

var resultado = soma(26, 35)
console.log(`O resultado dessa soma é ${resultado}.`)

// ---------

var xd = function(y){ // () função dentro de variavel com parametro 
    return y*3 
}

console.log(xd(5))