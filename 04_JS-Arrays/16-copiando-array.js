const notas = [7, 7, 8, 9];

// spread operator, é como se copiasse o conteúdo do array notas, fazendo uma cópia
const novasNotas = [...notas];

novasNotas.push(10);

console.log(`As notas originais eram: ${notas}`);
console.log(`As novas notas são: ${novasNotas}`);
