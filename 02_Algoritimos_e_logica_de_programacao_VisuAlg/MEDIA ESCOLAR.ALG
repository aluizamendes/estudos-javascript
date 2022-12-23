algoritmo "MÉDIA ESCOLAR"
var
   n1, n2, media: real

inicio

   escreval("-------------------------")
   escreval("  ESCOLA JAVALI CANSADO  ")
   escreval("-------------------------")

   escreva("Primeira nota: ")
   leia(n1)

   escreva("Segunda nota: ")
   leia(n2)

   media <- (n1 + n2) / 2

   se (media >= 7) entao
      escreval("-------------------------")
      escreval("MÉDIA: ", media)
      escreval("*** ALUNO APROVADO ***")
      escreval("-------------------------")

   senao
      escreval("-------------------------")
      escreval("MÉDIA: ", media)
      escreval("ALUNO REPROVADO")
      escreval("-------------------------")
   fimse





fimalgoritmo