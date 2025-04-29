programa {
  funcao inicio() {//Calcular a média de 5 notas informadas pelo usuário.
   inteiro contador,nota,media,aux = 0
   para (contador = 1;contador <= 5;contador++){
    escreva ("informe a ",contador,"ª nota:")
    leia (nota)
    aux = aux + nota
   }
   media = aux/5
   escreva ("a media das notas é:",media)
  }
}
