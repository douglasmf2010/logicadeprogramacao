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

function varrer(){
    elementohtml = document.getElementById("forof")
    for (const novafruta of frutas) {
        if(novafruta.charAt(0) == "u")
            forof.innerHTML
    }
}