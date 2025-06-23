var idade = Number(prompt("insira a idade"))
var altura = Number(prompt("insira a altura"))
var peso = Number(prompt("insira o peso"))

if((idade > 12) && (altura >= 1.50) && (peso >= 50) && (peso <= 120)){
    alert("pode brincar!")
}
else if((idade <= 12) && (altura >= 1.50) && (peso >= 50) && (peso <= 120)){
    alert("voce não tem a idade necessaria para entrar")
}
else if((idade <= 12) && (altura < 1.50) && (peso >= 50) && (peso <= 120)){
    alert("voce não tem a idade e a altura necessaria para brincar")
}
else if((idade <= 12) && (altura < 1.50) && (peso < 50) && (peso > 120)){
    alert("voce não tem a idade a altura e o peso necessaria para brincar")
}
else if((idade > 12) && (altura < 1.50) && (peso >= 50) && (peso <= 120)){
    alert("voce não tem a altura necessaria para entrar")
}
else if((idade > 12) && (altura >= 1.50) && (peso < 50) && (peso > 120)){
    alert("voce não tem o peso necessario para entrar")
}
else if((idade < 12) && (altura >= 1.50) && (peso >= 50) && (peso <= 120)){

}