// RECURSIVIDADE
function fatorial(n) {
  if (n == 1) {
    return 1;

  } else {
    let fat = n * fatorial(n-1);
    return fat;
  }
}

console.log(fatorial(5));