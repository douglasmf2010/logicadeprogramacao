var numnegativo

for(var i = 1; i <= 5; i++){
    var num = Number(prompt("insira o " +i+ "º numero"))
    if(num < 0){
        numnegativo += 1
    }
}
console.log("o numero de numeros negativos é " +numnegativo)