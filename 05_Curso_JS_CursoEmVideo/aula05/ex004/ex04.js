function verificar() {
  var pais = document.getElementById("pais").value;
  var resultado = document.getElementById("res");

  resultado.innerHTML = `<p>Vivendo em <strong>${pais}</strong>.</p>`;

  if (pais == "Brasil" || pais == "brasil") {
    resultado.innerHTML += `<p>Você é brasileiro!</p>`
  } else {
    resultado.innerHTML += `<p>Você é estrangeiro.</p>`
  }
}