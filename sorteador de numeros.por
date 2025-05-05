programa {
  inclua biblioteca Util --> lib
  funcao inicio() {
    inteiro numero
    escreva ("escolha um numero de 1 a 100:")
    leia (numero)
    numero = lib.sorteia (1,100)
    escreva (numero)
  }
}
