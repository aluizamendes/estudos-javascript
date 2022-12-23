console.log("Trabalhando com listas");

const listaDeDestinos = new Array(
  "Salvador",
  "São Paulo",
  "Rio de Janeiro"
)

listaDeDestinos.push("Ceará") // adicionando um item na lista

console.log(`Os destinos possíveis são:`)
console.log(listaDeDestinos);

listaDeDestinos.splice(1, 1); // posição (indice) e quantidade de elementos
console.log(listaDeDestinos);
