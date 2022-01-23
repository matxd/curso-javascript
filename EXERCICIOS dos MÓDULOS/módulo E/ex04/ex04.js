function tabuada(){
    var numeros = document.getElementById("numero")
    var tabuadas = document.getElementById("tabuada")
    
    if (numeros.value.length == 0) {
        alert("Numero invalido")
    } else {
        var n = Number(numero.value)
        var c = 1
        tabuadas.innerHTML = ""
        while ( c <= 10) {
            var item = document.createElement("option")
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tabuadas${c}`
            tabuadas.appendChild(item)
            c++
        }
    }
}