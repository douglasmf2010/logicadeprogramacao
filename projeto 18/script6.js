var idade = Number(prompt("insira a idade"))
var altura = Number(prompt("insira a altura"))
var peso = Number(prompt("insira o peso"))

if(idade > 12){
    if(altura > 1.50){
        if(peso > 50 && peso < 120){
            alert("parabens,voce tem tudo necessario para brincar")
        }else{
            alert("voce não tem o peso necessaio para brincar")
        }
    }else{
        alert("voce não tem a altura nem o peso necessario para brincar")
    }
}else{
    alert("voce não tem a idade,a altura e o peso necessaria para brincar")
}