algoritmo "SEQUENCIA DE FIBONACCI"

// Sequencia de Fibonacci
// Come�a com 0 e 1
// o pr�ximo n�mero � igual a soma dos 2 anteriores


var

   n1, n2, contador: inteiro


inicio

   n1 <- 1
   n2 <- 0


   para contador <- 1 ate 15 faca

      escreva(n1, ".. ")

      n1 <- n1 + n2
      n2 <- n1 - n2


   fimPara

fimalgoritmo