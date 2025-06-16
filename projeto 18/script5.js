var tipo = prompt("insira qual o tipo de combustivel entre 'gasolina' ou ''álcool")
var litros = Number(prompt("insira a quantidade de litros que foi comprado"))
var gasolina = 5.15, álcool = 4.29, valor, porcentagem

if(tipo == 'gasolina'){
    if(litros <= 20){
        porcentagem = 5.15 * 0.03
        valor = (litros * 5.15) - porcentagem
        alert("o valor a pagar é " +valor)
    }else if(litros >= 20){
        porcentagem = 5.15 * 0.05
        valor = (litros *  5.15) - porcentagem
        alert("o valor a pagar é " +valor)
    }
}else if(tipo == 'álcool'){
    if(litros <= 20){
        porcentagem = 4.29 * 0.04
        valor = (litros *  4.29) - porcentagem
        alert("o valor a pagar é " +valor)
    }else if(litros >= 20){
        porcentagem = 4.29 * 0.06
        valor = (litros * 4.29) - porcentagem
        alert("o valor a pagar é " +valor)
    }
}else{
    alert("Não temos esse tipo de combustivel aqui")
}