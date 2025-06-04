alert("digite zero para sair")
do{
    num = Number(prompt("digite um numero:"))
    if(isNaN(num)){
        alerrt("valor digitado não é numero")
        continue
}
if(num == 0 || isNaN(num))
    break
num%2==0?alert("numero par " + num):
alert("numero impar " + num)
}while(true)