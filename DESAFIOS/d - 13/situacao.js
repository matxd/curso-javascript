function situacao(){
    var nomeAluno = prompt("Qual é o nome do aluno?")
    var notaUm = Number(prompt(`Primeira nota de ${nomeAluno}:`))
    var notaDois = Number(prompt(`Segunda nota de ${nomeAluno}:`))
    var mediaNota = (notaUm + notaDois) / 2

    resultado.innerHTML = `<strong>Analisando a situação de ${nomeAluno}</strong>`

    if (mediaNota > 6){
        resultado.innerHTML += `<p>Com as notas ${notaUm} e ${notaDois}, <strong>a média é ${mediaNota}</strong></p>`
        resultado.innerHTML += `<p>Com média acima de 6, o aluno está <strong>APROVADO.</strong></p>`
    } else if (mediaNota > 3 && mediaNota < 6){
        resultado.innerHTML += `<p>Com as notas ${notaUm} e ${notaDois}, <strong>a média é ${mediaNota}</strong></p>`
        resultado.innerHTML += `<p>Com média entre 3 e 6, o aluno está em <strong>RECUPERAÇÃO.</strong></p>`   
    } else if (mediaNota < 3){
        resultado.innerHTML += `<p>Com as notas ${notaUm} e ${notaDois}, <strong>a média é ${mediaNota}</strong></p>`
        resultado.innerHTML += `<p>Com média abaixo de 3, o aluno está <strong>REPROVADO.</strong></p>`
    }
}