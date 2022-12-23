algoritmo "doacao crianca esperanca"
var

d : inteiro
valor: real

inicio

   escreval("-----------------------------")
   escreval("     CRIANÇA ESPERANÇA       ")
   escreval("-----------------------------")
   escreval(" Muito obrigado por ajudar ")
   escreval(" Digite [1] para doar R$10 ")
   escreval(" Digite [2] para doar R$25 ")
   escreval(" Digite [3] para doar R$50 ")
   escreval(" Digite [4] para doar outros valores  ")
   escreval(" Digite [5] para cancelar ")
   leia(d)

   escolha d

   caso 1

      valor <- 10

   caso 2

      valor <- 25

   caso 3

      valor <- 50

   caso 4

      escreva("Qual o valor da doação? R$")
      leia(valor)

   caso 5

      valor <- 0

   fimescolha
   escreval("-----------------------------")
   escreval("SUA DOAÇÃO FOI DE R$", valor)
   escreval("MUITO OBRIGADO!")
   escreval("-----------------------------")



fimalgoritmo