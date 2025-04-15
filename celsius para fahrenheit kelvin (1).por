programa {
  inclua biblioteca Matematica --> mat
  funcao inicio() {
  cadeia celsius,kelvin,fahrenheit
  real cescius
  escreva  ("\nescreva a temperatura em celcius para converter para kelvin:")    // TK = TC + 273,15     //C/5 = F-32/9
    leia  (celsius)
  escreva (celsius + 273.15)
  escreva ("\nescreva a temperatura em celcius para converter para fahrenheit:")
    leia (celsius)
  escreva (celsius * 1.8 + 32)
  }
}