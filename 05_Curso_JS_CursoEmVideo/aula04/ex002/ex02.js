function somar() {
  var input1 = document.getElementById("n1");
  var input2 = document.querySelector("#n2");
  var resultado = document.getElementById("resultado");

  var n1 = Number(input1.value);
  var n2 = Number(input2.value);

  var soma = n1 + n2;

  resultado.innerHTML = `A soma entre ${n1} e ${n2} é igual a <strong>${soma}</strong>`;
}


