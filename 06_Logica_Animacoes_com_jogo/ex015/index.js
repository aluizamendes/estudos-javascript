let tela = document.querySelector('canvas');
let pincel = tela.getContext('2d');
pincel.fillStyle = 'lightgray';
pincel.fillRect(0, 0, 600, 400);

function desenhaCirculo(x, y, raio, cor) {

  pincel.fillStyle = cor;
  pincel.beginPath();
  pincel.arc(x, y, raio, 0, 2 * Math.PI);
  pincel.fill();
}

function limpaTela() {

  pincel.clearRect(0, 0, 600, 400);
}

let raio = 19
let fatorCrescimento = 0
let cor = 'blue'

function atualizaTela() {

  limpaTela()

  if (raio < 20) {
    fatorCrescimento = 1
  } 
  else if (raio >= 30) {
    fatorCrescimento = -1
  }

  raio = raio + fatorCrescimento
  desenhaCirculo(300, 200, raio, cor)
}

setInterval(atualizaTela, 50)