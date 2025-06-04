const nomes = []
do{
    let novonome = prompt("digite um nome")
    if(novonome == 'o')
        break
    if(novonome.indexOf(0) == 'a')
        nomes.unshift(novonome)
    else
    nomes.push(novonome)
    console.log(nomes)
}while(true)

    function removerultimo(){
        nomes.pop
        console.log(nomes)
    }