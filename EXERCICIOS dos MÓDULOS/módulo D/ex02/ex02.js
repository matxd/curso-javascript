function verificar(){
    var data = new Date()
    var anoAtual = data.getFullYear()
    var infoAno = document.getElementById("nascimento")
    var resultado = document.getElementById("resultado")

    if (infoAno.value.length == 0 || infoAno.value > anoAtual) {
        alert("Dados inválidos")
    } else {
        var infoSexo = document.getElementsByName("radsex")
        var idade = anoAtual - Number(infoAno.value)
        var genero = ""
        var img = document.createElement("img")
        img.setAttribute("id", "fotos")  

        if (infoSexo[0].checked) { 
            genero = "Homem"
            if (idade >= 0 && idade < 18) {
                img.setAttribute("src", "imagens/bebe-m.png") 
            } else if (idade < 21) {
                img.setAttribute("src", "imagens/jovem-m.png")
            } else if (idade < 50) {
                img.setAttribute("src", "imagens/adulto-m.png")
            } else {
                img.setAttribute("src", "imagens/idoso-m.png")
            }

        } else if (infoSexo[1].checked) {
            genero = "Mulher"
            if (idade >= 0 && idade < 18) {
                img.setAttribute("src", "imagens/bebe-f.png") 
            } else if (idade < 21) {
                img.setAttribute("src", "imagens/jovem-f.png")
            } else if (idade < 50) {
                img.setAttribute("src", "imagens/adulto-f.png")
            } else {
                img.setAttribute("src", "imagens/idoso-f.png")
            }
        }
        resultado.style.textAlign = "center"
        resultado.innerHTML = `O sistema detectou: ${genero} com ${idade} anos de idade!`
        resultado.appendChild(img)
    }
}