algoritmo "CONTADOR INTELIGENTE"
var

   numeroInicio, numeroFim, contador, soma: inteiro

inicio

   escreval("-------------------------------")
   escreval("      CONTAGEM INTELIGENTE     ")
   escreval("-------------------------------")

   escreva("Início: ")
   leia(numeroInicio)
   escreva("Fim: ")
   leia(numeroFim)

   escreval("-------------------------------")
   escreval("         C O N T A N D O        ")
   escreval("-------------------------------")



   se (numeroInicio < numeroFim) entao

      enquanto (numeroInicio <= numeroFim) faca
         escreva(numeroInicio, "..")

         numeroInicio <- numeroInicio + 1
      fimEnquanto

   senao
      enquanto (numeroInicio >= numeroFim) faca

         escreva(numeroInicio, "..")

         numeroInicio <- numeroInicio - 1
      fimEnquanto
   fimse

fimalgoritmo