const notas = [10, 6.5, 8, 7.5];

let somaNotas = 0;

for (i = 0; i < notas.length; i++) {
  somaNotas += notas[i];

  console.log(somaNotas);
}

let media = somaNotas / notas.length;

console.log(`A média é igual a ${media}`);
