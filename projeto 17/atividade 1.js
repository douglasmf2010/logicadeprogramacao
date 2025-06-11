const frutas = ["uva","morango","banana","maça","abacaxi"]
console.log(frutas)

function buscarporposicao(){
    posicao = prompt("escolha elemento do array")
    alert(frutas[posicao])
}

function tamanhoarray(){
    alert(frutas.length)
}

function adicionarfinal(){
    novafruta = prompt("adicione a nova fruta no final")
    frutas.push(novafruta)
    console.log(frutas)
}

function adicionarcomeco(){
    novafruta = prompt("adicione a nova fruta comeco")
    frutas.unshift(novafruta)
    console.log(frutas)
}
function removerfinal(){
    frutas.pop(frutas)
    console.log(frutas)
}
function removerinicio(){
    frutas.shift(frutas)
    console.log(frutas)
}
function varrer(){
    elementohtml = document.getElementById("forof")
    for (const novafruta of frutas) {
        if(novafruta.charAt(0) == "u")
            forof.innerHTML
    }
}
function fatiar(){
    pos1 = prompt("digite a posição do corte")
    const subfrutas = frutas.slice(pos1)
    console.log(subfrutas)
}
function recortar(){
    pos1 = prompt("digite a posição do primeiro corte")
    pos2 = prompt("digite a posição do segundo corte")
    const subfrutas = frutas.splice(pos1,pos2)
    console.log("original " +frutas)
    console.log("copia " +subfrutas)
}
function remover(){
    if(frutas.length == 0){
        alert("array vazio")
    }else{
        frutas.pop()
        console.log
    }
}
function procurar(){
    palavra = prompt("digite a fruta para procurar")
    pos = frutas.indexOf(palavra)
    alert(pos)
}
function procurarultimo(){
    palavra = prompt("digite a fruta para procurar")
    pos = frutas.lastIndexOf(palavra)
    alert(pos)
}