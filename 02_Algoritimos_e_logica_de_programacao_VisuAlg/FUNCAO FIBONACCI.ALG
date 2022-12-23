algoritmo "FUNCAO FIBONACCI"

var

   primeiro, segundo, terceiro, contador: inteiro


funcao fibonacci(var n1, n2: inteiro): inteiro
var
   sequencia: inteiro

inicio

   sequencia <- n1 + n2

   n1 <- n2
   n2 <- sequencia

   retorne sequencia

fimFuncao


inicio

   primeiro <- 0
   escreval(primeiro)
   segundo <- 1
   escreval(segundo)

   para contador <- 1 ate 10 faca
      terceiro <- fibonacci(primeiro, segundo)
      escreval(terceiro)
   fimPara


fimalgoritmo