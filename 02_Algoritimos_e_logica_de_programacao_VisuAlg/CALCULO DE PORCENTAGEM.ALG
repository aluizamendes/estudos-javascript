Algoritmo "emprestimo do banco"
// Disciplina   : [Linguagem e L�gica de Programa��o]
// Professor   : Guanabara
// Descri��o   :
// Autor(a)    : Ana Luiza Mendes
// Data atual  : 19/12/2022
Var
   valorEmprestimo, numeroParcelas, totalComJuros, valorCadaParcela: real

Inicio

   // emprestimo =  valor desejado + 20% / numero de parcelas

   escreva("Qual o valor do empr�stimo? ")
   leia(valorEmprestimo)

   escreva("Quantas parcelas? ")
   leia(numeroParcelas)

   totalComJuros <- valorEmprestimo + ((valorEmprestimo * 20) / 100)
   valorCadaParcela <-   totalComJuros / numeroParcelas

   escreva("Voc� ir� pagar um total de R$", totalComJuros, ", com ", numeroParcelas, " parcelas de R$", valorCadaParcela)



Fimalgoritmo