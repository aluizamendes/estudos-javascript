algoritmo "TABELA DE FUTEBOL"
var

   times: vetor[1..3] de caractere
   i, j: inteiro

inicio

   escreval("-------------------------")
   escreval("  CAMPEONATO DE FUTEBOL  ")
   escreval("-------------------------")


   para i <- 1 ate 3 faca

      escreva("Nome do ", i, "o. time: ")
      leia(times[i])

   fimPara

   limpaTela


   escreval("-------------------------")
   escreval("  CAMPEONATO DE FUTEBOL  ")
   escreval("-------------------------")

   para i <- 1 ate 3 faca

      para j <- 1 ate 3 faca

         se (times[i] <> times[j]) entao

            escreval(times[i], " [] x [] ", times[j])

         fimSe

      fimPara

   fimPara

fimalgoritmo