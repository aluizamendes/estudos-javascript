Algoritmo "emprestimo do banco"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Guanabara
// Descrição   :
// Autor(a)    : Ana Luiza Mendes
// Data atual  : 19/12/2022
Var
   valorEmprestimo, numeroParcelas, totalComJuros, valorCadaParcela: real

Inicio

   // emprestimo =  valor desejado + 20% / numero de parcelas

   escreva("Qual o valor do empréstimo? ")
   leia(valorEmprestimo)

   escreva("Quantas parcelas? ")
   leia(numeroParcelas)

   totalComJuros <- valorEmprestimo + ((valorEmprestimo * 20) / 100)
   valorCadaParcela <-   totalComJuros / numeroParcelas

   escreva("Você irá pagar um total de R$", totalComJuros, ", com ", numeroParcelas, " parcelas de R$", valorCadaParcela)



Fimalgoritmo