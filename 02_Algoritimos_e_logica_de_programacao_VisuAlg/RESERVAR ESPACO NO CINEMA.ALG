algoritmo "RESERVAR ESPACO NO CINEMA"
var

   espacos: vetor[1..10] de caractere
   i, j, reserva: inteiro
   resp: caractere

inicio
   espacos[1] <- "[ B 1 ]"
   espacos[2] <- "[ B 2 ]"
   espacos[3] <- "[ B 3 ]"
   espacos[4] <- "[ B 4 ]"
   espacos[5] <- "[ B 5 ]"
   espacos[6] <- "[ B 6 ]"
   espacos[7] <- "[ B 7 ]"
   espacos[8] <- "[ B 8 ]"
   espacos[9] <- "[ B 9 ]"
   espacos[10] <- "[ B 10 ]"


   resp <- "s"

   enquanto (resp = "s") ou (resp = "S") faca

      // escrever assentos na tela
      para i <- 1 ate 10 faca
         escreva(espacos[i])
      fimPara

      escreval("")
      escreval("---------------------------------------------------------------------------")

      escreva("Reservar a cadeira: B")
      leia(reserva)


      para j <- 1 ate 10 faca

         se (j = reserva) entao

            se (espacos[j] = "[ --- ]") entao
               escreval("ERRO! O lugar já está ocupado!")

            senao

               espacos[j] <- "[ --- ]"
               escreval("A cadeira B", reserva, " RESERVADA!")
            fimSe
         fimSe
      fimPara

      escreva("Quer reservar outra? [S/N] ")
      leia(resp)

      limpaTela
   fimEnquanto
   
fimalgoritmo