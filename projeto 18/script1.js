var homem1 = Number(prompt("insira a idade do primeiro homem:"))
var homem2 = Number(prompt("insira a idade do segundo homem:"))
var mulher1 = Number(prompt("insira a idade da primeiro mulher:"))
var mulher2 = Number(prompt("insira a idade da segunda mulher:"))
var homemvelho, homemnovo, mulhervelha, mulhernova, soma1, soma2

if(homem1 > homem2){
    homemvelho = homem1
    homemnovo = homem2
}else{
    homemvelho = homem2
    homemnovo = homem1
}
if(mulher1 > mulher2){
    mulhervelha = mulher1
    mulhernova = mulher2
}else{
    mulhervelha = mulher2
    mulhernova = mulher1
}

soma1 = homemvelho + mulhernova
soma2 = homemnovo + mulhervelha

alert("a soma do homem mais velho com a mulher mais nova é " +soma1)
alert("a soma do homem mais novo com a mulher mais velha é " +soma2)