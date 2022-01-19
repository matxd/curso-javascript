// LEMBRE-SE DE ADICIONAR COMENTARIOS PARA EXECUTAR OS CODIGOS INDIVIDUAIS

function fatorial (numero) { // tradicional
    var valorfat = 1
    for (var contador = numero; contador > 1; contador--) {
        valorfat *= contador
    }
    return valorfat 
}

console.log(fatorial(5))


function fatorial (numero) { // recursividade 
    if (numero == 1) {
        return 1
   } else {
       return numero * fatorial(numero - 1)
   }
}

console.log(fatorial(5))
