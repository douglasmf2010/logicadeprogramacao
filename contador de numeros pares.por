programa {
  funcao inicio() {
    inteiro numero,contador,pares = 0
    para (contador = 1;contador <= 10;contador++){
      escreva ("\ninforme um numero:")
      leia (numero)
      se (numero % 2 == 0)
      pares = pares + 1
    }
    escreva ("quantidade de pares:",pares)
  }
}