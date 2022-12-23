Algoritmo "SELETOR DE PESSOAS"
// Disciplina   : [Linguagem e Lógica de Programação]
// Data atual  : 21/12/2022

// Passos:
// enquanto resposta != S:
// perguntar qual sexo [M/F] -> guardar
// perguntar idade -> guardar
// perguntar a cor do cabelo: preto, castanho, loiro ou ruivo -> guardar
// perguntar se deseja continuar [S/N] -> guardar
// se = S
// perguntar novamente as caracteristicas acima
// se = N
// mostrar o total de homens, mais de 18, castanho
// mostrar o total de mulheres, entre 25 e 30, loiras
Var

   quantidadeMulheres, quantidadeHomens, idade, cabelo: inteiro
   sexo, continuar: caracter


Inicio

   quantidadeMulheres <- 0
   quantidadeHomens <- 0

   escreval("========================")
   escreval("|  SELETOR DE PESSOAS  |")
   escreval("========================")

   repita

      escreva("Qual o sexo? [M/F] ")
      leia(sexo)
      escreva("Qual a idade? ")
      leia(idade)

      escreval("---------------------")
      escreval("[1] Preto")
      escreval("[2] Castanho")
      escreval("[3] Loiro")
      escreval("[4] Ruivo")
      escreval("---------------------")

      escreva("Qual a cor do cabelo? ")
      leia(cabelo)


      se (sexo = "m") e (idade > 18) e (cabelo = 2) entao

         quantidadeHomens <- quantidadeHomens + 1

      fimSe

      se (sexo = "f") e (idade > 25) e (idade < 35) e (cabelo = 3) entao

         quantidadeMulheres <- quantidadeMulheres + 1

      fimSe
      
      escreval("Quer continuar? [S/N] ")
      leia(continuar)
      escreval("---------------------")


   ate (continuar <> "s")

   escreval("========================")
   escreval("|    RESULTADO FINAL   |")
   escreval("========================")
   escreval("Total de homens com mais de 18 anos e cabelos castanhos é: ", quantidadeHomens)
   escreval("Total de mulheres entre 25 e 30 anos e cabelos loiros é: ", quantidadeMulheres)
   escreval("========================")



Fimalgoritmo