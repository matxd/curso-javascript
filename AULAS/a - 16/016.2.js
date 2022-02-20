function fatorial(numero){
    var valorFat = 1
    for (var contador = numero; contador > 1; contador--) {
        valorFat *= contador
    }
    return valorFat 
}

console.log(fatorial(5))

function fatorial(numero){ 
    if (numero == 1) {
        return 1
   } else {
       return numero * fatorial(numero - 1)
   }
}

console.log(fatorial(5))
