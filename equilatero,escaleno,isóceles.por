programa {
  funcao inicio() {
    inteiro lado1,lado2,lado3
    escreva ("imforme o lado 1 do triangulo:")
      leia (lado1)
    escreva ("imforme o lado 2 do triangulo:")
      leia (lado2)
    escreva ("imforme o lado 3 do triangulo:")
      leia (lado3)
  se ((lado1 == lado2) e (lado2 == lado3) e (lado1 ==lado3)){
    escreva ("\no triangulo é equilatero")
  }
  senao se ((lado1 != lado2) e (lado2 != lado3) e (lado1 !=lado3)){
    escreva ("\no triangulo é escaleno")
  }
  senao {
    escreva ("\no triangulo é isóceles")
  }
  }
}
