function parImpar(numero){ 
    if (numero % 2 == 0) {
        return "par"
    } else {
        return "impar"
    }
}

var resultado = parImpar(10) 
console.log(`O numero é ${resultado}!`)

function soma(num1 = 0, num2 = 0){ 
    return num1 + num2
}

var resultado = soma(26, 35)
console.log(`O resultado dessa soma é ${resultado}.`)

var xd = function(y){ 
    return y*3 
}

console.log(xd(5))