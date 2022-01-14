var atual = new Date()
var horario = atual.getHours()

if (horario <= 12) {
    console.log("Bom dia, são ${horario} horas da manhã!")
} else if (horario <= 18) {
    console.log("Boa tarde, são ${horario} horas da tarde!")
} else if (horario <= 23) {
    console.log("Boa noite, são ${horario} horas da noite!")
}
