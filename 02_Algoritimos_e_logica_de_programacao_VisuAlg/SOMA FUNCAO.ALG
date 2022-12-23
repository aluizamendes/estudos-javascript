algoritmo "SOMA FUNCAO"
var

   valor1, valor2, soma: inteiro


Funcao somaValores(x, y: inteiro): inteiro
inicio
   retorne x + y

fimFuncao


inicio

   escreva("Digite o primeiro valor: ")
   leia(valor1)

   escreva("Digite o segundo valor: ")
   leia(valor2)

   soma <- somaValores(valor1, valor2)

   escreva("A soma entre ", valor1, " e ", valor2, " é igual a", soma)

fimalgoritmo