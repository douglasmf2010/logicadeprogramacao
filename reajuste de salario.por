programa {
  funcao inicio() {
    inteiro sa,ns
     escreva ("escreva o salario:")
       leia (sa)
    se (sa < 500){
     ns = sa * 1.15
    }
    senao se (sa <= 1000){
     ns=sa*1.1
    }
    senao {
     ns=sa*1.05
  }
  escreva (ns)
 }
}