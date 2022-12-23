console.log("\n Trabalhando com Loops \n");

const listaDeDestinos = new Array(
  "Salvador",
  "São Paulo",
  "Rio de Janeiro",
  "Fortaleza",
  "Curitiba",
  "Santos"
)

let estaAcompanhado = true;
let temPassagemComprada = false;
const destino = "Recife";

const idadeComprador = 22;

const podeComprar = idadeComprador >= 18 || estaAcompanhado == true; // expressões lógicas dentro de uma variável

let destinoExiste = false;
let contador = 0;

while (contador < 6) {

  if(listaDeDestinos[contador] == destino) {
    console.log("O destino existe. \n");
    destinoExiste = true;
    break;
  }

  contador++;
}

console.log("Destino existe: ", destinoExiste);