const btnGerar = document.getElementById("btnGerar");

function gerarTabuada() {

  let numero = document.getElementById("numero").value;
  let res = document.getElementById("res");

  // "limpar" o conteúdo pra poder mostrar de novo
  res.innerHTML = "";

  if (numero == "") {
    alert("[ERRO] Por favor digite um número válido.");
    res.style.display = "none";
  }
  else {
    let tabuada = Number(numero);
    res.style.display = "block";

    for (i = 1; i <= 10; i++) {
      res.innerHTML += `<p>${tabuada} x ${i} = ${tabuada * i}</p>`;
    }
  }
}

btnGerar.addEventListener("click", gerarTabuada);