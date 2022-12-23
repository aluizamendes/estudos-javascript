algoritmo "clculo de imc"
var
   m, a, IMC: real
inicio

   escreva("Massa (Kg): ")
   leia(m)

   escreva("Altura (m): ")
   leia(a)

   IMC <- m / (a ^ 2)

   escreval("Seu IMC é igual a ", IMC:5:2)

   se (IMC < 17) entao
      escreval("Muito abaixo do peso.")

   senao
      se (IMC >= 17) e (IMC < 18.5) entao
         escreval("Abaixo do peso.")

      senao

         se (IMC >= 18.5) e (IMC < 25) entao
            escreval("Peso ideal.")

         senao

            se (IMC >= 25) e (IMC < 30) entao
               escreval("Sobrepeso.")

            senao
               se (IMC >= 35) e (IMC < 40) entao
                  escreval("Obesidade severa.")

               senao
                  escreval("Obesidade mórbida.")
               fimse
            fimse
         fimse
      fimSe
   fimSe
fimalgoritmo