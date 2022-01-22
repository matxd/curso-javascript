function calcTemp(){
    var celsius = Number(prompt("Digite uma temperatura em °C (Celsius)"))
    var temp = [celsius + 273.15, celsius * 9 / 5 + 32]
  
    resultado.innerHTML = `A temperatura de <strong>${celsius}°C</strong>, corresponde a:`
    resultado.innerHTML += `<p><strong>${temp[0]}°K</strong> (Kelvin)</p> <strong>${temp[1]}°F</strong> (Fahrenheit)`
}