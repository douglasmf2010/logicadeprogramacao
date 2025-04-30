programa {
  funcao inicio() {
    inteiro numero
    cadeia sim,resposta = "sim"
    enquanto (resposta == "sim"){
      escreva ("informe um numero:")
      leia (numero)
      escreva ("o resultado é:",numero*3,"\n")
      escreva ("voce deseja um novo calculo,responda com \"sim\" ou \"não\":") 
      leia (resposta)
  }
 }
}