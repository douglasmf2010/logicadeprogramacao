var horas = Number(prompt("insira as horas trabalhadores do professor:"))
var nivel = Number(prompt("insira o nivel do professor"))
var nivel1 = 12, nivel2 = 17, nivel3 = 25, salario, nivelprof

if(nivel = 1){
    nivelprof = nivel1
}else if(nivel = 2){
    nivelprof = nivel2
}
else if(NIVEL = 3){
    nivelprof = nivel3
}else{
    alert("esse nivel não existe")
}

salario = nivelprof * horas

alert("o salario do professor é " +salario)