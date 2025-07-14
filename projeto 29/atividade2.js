var soma = 0
var ult = 1

for(let i = 1; i <= 64; i++){
    ult = ult * 2
    soma = soma + ult
}
console.log("o valor na ultima casa é: " +ult)
console.log("a soma de todos é: " +soma)