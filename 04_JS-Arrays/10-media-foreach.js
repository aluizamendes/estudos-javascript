const notas = [10, 6.5, 8, 7.5];

let somaNotas = 0;

notas.forEach(function (e) {
  somaNotas += e;
});

let media = somaNotas / notas.length;

console.log(`A média é igual a ${media}`);
