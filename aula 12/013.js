var atual = new Date()
var semana = atual.getDay()

switch(semana) {  // switch serve para situações especificas com valores sem intervalos.
    case 0:
        console.log("Hoje é Domingo.")
    break                                 // break OBRIGATORIO

    case 1:
        console.log("Hoje é Segunda-Feira.")
    break

    case 2:
        console.log("Hoje é Terça-Feira.")
    break

    case 3:
        console.log("Hoje é Quarta-Feira.")
    break

    case 4:
        console.log("Hoje é Quinta-Feira.")
    break
    
    case 5:
        console.log("Hoje é Sexta-Feira.")
    break

    case 6:
        console.log("Hoje é Sabado.")
    break
    
    default:
        console.log("Dia invalido.")
}