algoritmo "FUNCAO FATORIAL DE UM NUMERO"
var
     numero, resultadoFatorial: inteiro


Funcao fatorial(x: inteiro): inteiro
var contador, resultado: inteiro

inicio

resultado <- 1

para contador <- 1 ate x faca

     resultado <- resultado * contador

fimPara

retorne resultado

fimFuncao

inicio

   escreva("Digite um n�mero para saber seu fatorial: ")
   leia(numero)

   resultadoFatorial <- fatorial(numero)

   escreva("O valor de ", numero, "! � igual a ", resultadoFatorial)

fimalgoritmo