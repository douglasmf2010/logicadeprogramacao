programa {
  funcao inicio() {//peça um numero e mostre o fatorial dele
    inteiro numero,acumulador=1
     escreva ("informe um numero:")
      leia (numero)
    para (numero; numero >= 1; numero--){
      acumulador=acumulador*numero
    }
     escreva ("\n", acumulador)
  }
}
