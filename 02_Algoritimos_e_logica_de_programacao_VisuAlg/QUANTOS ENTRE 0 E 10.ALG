algoritmo "QUANTOS ENTRE 0 E 10"
var

   c, valor, total, somaImpares: inteiro

inicio

   total <- 0
   somaImpares <- 0

   para c <- 1 ate 6 faca

      escreva("Digite um valor: ")
      leia(valor)

      se (valor >= 0) e (valor <= 10) entao

         total <- total + 1

         se (valor % 2 = 1) entao
            somaImpares <- somaImpares + valor
         fimse

      fimse

   fimpara

   escreval("Ao todo foram ", total, " valores entre 0 e 10")
   escreval("Nesse intervalo, a soma dos impares foi ", somaImpares)


fimalgoritmo