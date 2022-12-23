algoritmo "aptidao carteira de motorista"
var
   ano_atual, ano_nasc, idade: inteiro
   
inicio

   escreval("-------------------------")
   escreval("DEPARTAMENTO DE TRANSITO")
   escreval("-------------------------")

   escreva("Ano atual (yyyy): ")
   leia(ano_atual)

   escreva("Ano de nascimento (yyyy): ")
   leia(ano_nasc)

   idade <- ano_atual - ano_nasc

   se (idade >= 18) entao

      escreval("-------- STATUS --------")
      escreval("IDADE: ", idade)
      escreval("ESTÁ APTO A TIRAR CARTEIRA!")
      escreval("------------------------")

   senao
      escreval("-------- STATUS --------")
      escreval("IDADE: ", idade)
      escreval("INAPTO A TIRAR CARTEIRA")
      escreval("------------------------")
   fimse





fimalgoritmo