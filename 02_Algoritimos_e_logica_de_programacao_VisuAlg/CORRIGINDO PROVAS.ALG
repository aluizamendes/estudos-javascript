algoritmo "CORRIGINDO PROVAS"
var

   gabarito: vetor[1..5] de caractere
   alunos: vetor[1..3]  de caractere
   respostaAlunos: vetor[1..5] de caractere
   notas: vetor[1..3] de inteiro
   nota: inteiro
   media: real
   i, j, c, r, a: inteiro


inicio

   escreval("PASSO 1 - CADASTRO DE GABARITO")
   escreval("------------------------------")

   para i <- 1 ate 5 faca
      escreva("Questao ", i, ": ")
      leia(gabarito[i])
   fimPara

   limpaTela


   // loop p/ realizar as ações 3 vezes, pois sao 3 alunos
   para a <- 1 ate 3 faca

      nota <- 0

      escreval("ALUNO ", a)
      escreval("------------------------------")

      escreva("Nome: ")
      leia(alunos[a])
      
      escreval("RESPOSTAS DADAS")

      para j <- 1 ate 5 faca
         escreva("Questao", j, ": ")
         leia(respostaAlunos[j])
      fimPara


      // verifica se o aluno colocou o valor da resposta igual na sequencia do gabarito
      para c <- 1 ate 5 faca
         se (gabarito[c] = respostaAlunos[c]) entao

            nota <- nota + 2
            notas[a] <- nota

         fimSe
      fimPara

      limpaTela
   fimPara


   // calcular a média das 3 notas
   media <- (notas[1] + notas[2] + notas[3]) / 3


   escreval("NOTAS FINAIS")
   escreval("------------------------------")

   para r <- 1 ate 3 faca
      escreval(alunos[r]:15, notas[r])
   fimPara
   
   escreval("------------------------------")
   escreval("Média da turma: ", media)

fimalgoritmo