algoritmo "ANALISADOR DE VALORES"

// Exibir:
// soma dos valores
// m�dia entre os valores
// quantos s�o divis�veis por 5
// quantos s�o nulos
// soma dos pares

var

   valor, valoresTotais, valoresNulos, somaValoresPar: inteiro
   valoresDivisiveisPorCinco, contador: inteiro
   mediaValores: real


inicio


   valoresTotais <- 0
   valoresNulos <- 0
   somaValoresPar <- 0
   valoresDivisiveisPorCinco <- 0


   para contador <- 1 ate 5 faca

      escreva("Digite o ", contador, "o valor: ")
      leia(valor)

      valoresTotais <- valoresTotais + valor


      // se for nulo
      se (valor = 0) entao
         valoresNulos <-  valoresNulos + 1
      fimse

      // se for divisivel por 5
      se (valor % 5 = 0) entao
         valoresDivisiveisPorCinco <- valoresDivisiveisPorCinco + 1
      fimse

      // se for par
      se (valor % 2 = 0) entao
         somaValoresPar <- somaValoresPar + valor
      fimse

   fimPara

   mediaValores <- valoresTotais / 5

   escreval("A soma dos valores �: ", valoresTotais)
   escreval("A m�dia entre os valores �: ", mediaValores)
   escreval("Valores divisiveis por cinco: ", valoresDivisiveisPorCinco)
   escreval("Valores nulos: ", valoresNulos)
   escreval("A soma dos valores pares �: ", somaValoresPar)



fimalgoritmo