
function calcular() {

  var vel = document.getElementById("vel").value;
  var resultado = document.getElementById("res");

  resultado.innerHTML = `<p>Sua velocidade atual é de <strong>${vel}Km/h</strong></p>`;

  if (vel > 60) {
    resultado.innerHTML += `Você está <strong>MULTADO</strong> por excesso de velocidade.`;
  }
  resultado.innerHTML += `<p>Dirija sempre com cinto de segurança!</p>`;
  
}