const alunos = ["João", "Juliana", "Caio"];
const medias = [10, 8, 7.5, 9];

const alunosMedias = [alunos, medias];

function exibeNota(nome) {
  if (alunosMedias[0].includes(nome)) {
    const [alunos, medias] = alunosMedias; // sintaxe de desestruturação de listas

    const indiceAluno = alunos.indexOf(nome);
    const mediaAluno = medias[indiceAluno];

    console.log(`${nome} tem a média igual a ${mediaAluno}`);
  } else {
    console.log("Aluno não encontrado.");
  }
}

let nomeProcurar = "Caio";

exibeNota(nomeProcurar);
