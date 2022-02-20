function convMedida() {
    var metros = prompt("Digite uma distância em metros (m)")
    var medidas = [metros / 1000, metros / 100, metros / 10, metros * 10, metros * 100, metros * 1000]
    var nMedidas = ["Quilômetros", "Hectômetros", "Decâmetros", "Decímetros", "Centímetros", "Milímetros"]

    resultado.innerHTML = ""

    for (var controle in medidas) {
        resultado.innerHTML += `<p>Aproximadamente <strong>${medidas[controle]} ${nMedidas[controle]}.</strong></p>`
    }   
}

function limpaR() { 
       resultado.innerHTML = "Clique no botão acima para iniciar"
}