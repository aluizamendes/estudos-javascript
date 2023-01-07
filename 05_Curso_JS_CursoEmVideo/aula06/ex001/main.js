const btnContar = document.getElementById("contar");
let res = document.getElementById("res");

function contagem() {
  // valores
  let inicio = document.getElementById("inicio").value ;
  let fim = document.getElementById("fim").value ;
  let passo = document.getElementById("passo").value ;

  if (inicio == "" || fim == "") {
    alert("Não foi possível realizar a contagem sem início e fim.");
    res.innerHTML = `Impossível contar.`;
  }
  else {
    res.innerHTML = `Contando:<br>`;
    let i = Number(inicio);
    let f = Number(fim);
    let p = Number(passo);

    if (passo <= 0) {
      alert("Campo PASSO inválido. Será considerado igual a 1.");
      p = 1;
    }

    // se o número do início for maior que o do fim (contar decrescente)
    if (i > f) {
      for (let c = i; c >= f; c -= p) {
        res.innerHTML += `${c} 👉 `;
      }
    } 
    // contagem crescente
    else {
      for (c = i; c <= f; c += p) {
        res.innerHTML += `${c} 👉 `;
      }
    } 
    res.innerHTML += `Fim! 🏁`;
  }

}

btnContar.addEventListener("click", contagem);
