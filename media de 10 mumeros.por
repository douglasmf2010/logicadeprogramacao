programa {
  funcao inicio() {
    inteiro numero,contador,media = 0
    para (contador = 1;contador <= 10;contador++){
      escreva ("informe um numero:")
      leia (numero)
      media = media + numero
    }
  escreva ("a media dos numeros é:",media / 10)
  }
}
