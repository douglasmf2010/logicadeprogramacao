/*1. Desenvolver um algoritmo que leia a altura de 15 pessoas. Este programa
deverá calcular e mostrar :
a. A menor altura do grupo;
b. A maior altura do grupo;*/

var cont, alturamaior, alturamenor

for(cont = 1; cont <= 15; cont++){
    var alturaatual = Number(prompt("insira a sua altura"))
    if(alturaatual < alturamenor){
        alturamenor = alturaatual
    }else if(alturaatual > alturamaior){
        alturamaior = alturaatual
    }
}
alert("a maior altura é " +alturamaior+ " e a menor altura é " +alturamenor)