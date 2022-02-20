function inicial(){
    var mensagem = document.getElementById("mensagem")
    var imagens = document.getElementById("manha")
    var data = new Date()
    var horario = data.getHours()
    
    mensagem.innerText = `Agora são ${horario} horas.`
    

    if (horario >= 0 && horario <= 12) {
        imagens.src = "imagens/manha.jpg"
        document.body.style.background = "#FFDEAD"

    } else if (horario > 12 && horario <= 18) {  
        imagens.src = "imagens/tarde.jpg"
        document.body.style.background = "#FFA500"

    } else { 
        imagens.src = "imagens/noite.jpg"
        document.body.style.background = "#4169E1"
    } 
}