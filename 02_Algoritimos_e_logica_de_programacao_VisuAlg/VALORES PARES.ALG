Algoritmo "VALORES PARES"
// Disciplina   : [Linguagem e Lógica de Programação]
// Data atual  : 21/12/2022

Var

   c, valor: inteiro

Inicio

   escreva("Digite um valor: ")
   leia(valor)

   se (valor % 2 = 1) entao
      valor <- valor - 1
   fimse

   para c <- valor ate 0 passo -2 faca
      escreval(c)
   fimpara



Fimalgoritmo