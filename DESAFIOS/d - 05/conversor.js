function converter(){
    var metros = prompt("Digite uma distância em metros (m)")
    var km = metros / 1000
    var hm = metros / 100
    var dam = metros / 10
    var dm = metros * 10
    var cm = metros * 100
    var mm = metros * 1000

    resultado1.innerHTML = `Aproximadamente <strong>${km} Quilômetros.</strong>`     
    resultado2.innerHTML += `Aproximadamente <strong>${hm} Hectometros.</strong>`
    resultado3.innerHTML += `Aproximadamente <strong>${dam} Decametros.</strong>`
    resultado4.innerHTML += `Aproximadamente <strong>${dm} Decimetros.</strong>`
    resultado5.innerHTML += `Aproximadamente <strong>${cm} Centimetros.</strong>`
    resultado6.innerHTML += `Aproximadamente <strong>${mm} Milimetros.</strong>`
}

 // .toUpperCase() só funciona com string antes do .