console.log("Trabalhando com condicionais");

const listaDeDestinos = new Array(
  "Salvador",
  "São Paulo",
  "Rio de Janeiro",
  "Fortaleza",
  "Curitiba",
  "Santos"
)

let estaAcompanhado = true;

const idadeComprador = 22;

if(idadeComprador >= 18) {
  console.log("====================================");
  console.log("|             BEM VINDO            |");
  console.log("====================================");
  console.log("|    Os pacotes disponíveis são:   |");
  console.log("====================================");
  console.log(listaDeDestinos);

} 
else if(estaAcompanhado == true) {
  console.log("====================================");
  console.log("|             BEM VINDO            |");
  console.log("====================================");
  console.log("|   O comprador está acompanhado   |");
  console.log("====================================");
  console.log("|    Os pacotes disponíveis são:   |");
  console.log("====================================");
  console.log(listaDeDestinos);

} else {
  console.log("====================================");
  console.log("========== MENOR DE IDADE ==========");
  console.log("|       Compra não autorizada      |");
  console.log("====================================");
}