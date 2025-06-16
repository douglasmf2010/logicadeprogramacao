var num1 = Number(prompt("insira o primeiro numero"))
var num2 = Number(prompt("insira o segundo numero"))
var nummaior, nummenor, dif

if(num1 > num2){
    nummaior = num1
    nummenor = num2
}else{
    nummaior = num2
    nummenor = num1
}

dif = nummaior - nummenor

alert("a diferença do numero maior: " +nummaior+ " e do numero menor: " +nummenor+ " é " +dif)