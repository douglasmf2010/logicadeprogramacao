var clientes = Number(prompt("quantos clientes seu pet shop atendeu na semana?"))

if(clientes <= 20){
    alert("o seu pet shop nessa semana ficou ocioso")
}else if(clientes >= 30){
    alert("o seu pet shop ficou sem local para mais clientes")
}else{
    alert("o seu pet shop teve um movimento normal essa semana")
}