var sa = Number(prompt("insira o salario atual:"))
var ns;

if(sa < 500){
    ns = sa + (sa * 0.15)
    
}
else if(sa <= 1000){
    ns = sa + (sa * 0.10)
    
}
else{
    ns = sa + (sa * 0.05)
}
alert(ns)
