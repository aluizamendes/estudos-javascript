algoritmo "ANALISADOR DE STRINGS"
var
   nome: caractere
   n: inteiro

inicio

   escreva("Digite um nome: ")
   leia(nome)
   
   n <- Compr(nome)

   escreval("Total de letras do seu nome: ", Compr(nome))
   escreval("Seu nome em maiusculas é: ", Maiusc(nome))
   escreval("Seu nome em minusculas é: ", Minusc(nome))
   escreval("A primeira letra do seu nome é: ", Copia(nome, 1, 1))
   escreval("A última letra do seu nome é: " Copia(Maiusc(nome), Compr(nome, 1))

fimalgoritmo