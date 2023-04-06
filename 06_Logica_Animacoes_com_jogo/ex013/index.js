var tela = document.querySelector('canvas');
var pincel = tela.getContext('2d');

pincel.fillStyle = 'lightgray';
pincel.fillRect(0, 0, 600, 400);

var raio = 10;

function desenhaCirculo(x, y, raio, cor) {

  pincel.fillStyle = cor;
  pincel.beginPath();
  pincel.arc(x, y, raio, 0, 2 * Math.PI);
  pincel.fill();
}

desenhaCirculo(300,200, raio + 20, 'red'); // maior círculo
desenhaCirculo(300,200, raio + 10, 'white');
desenhaCirculo(300,200, raio, 'red'); // menor circulo

function dispara(evento) {

  var mouseX = evento.pageX - tela.offsetLeft;
  var mouseY = evento.pageY - tela.offsetTop;

  console.log(`x: ${mouseX}, y: ${mouseY}`)
  
 // x entre 290 e 310 
 // y entre 190 e 210

  if (
    (mouseX <= 300 + raio) &&
    (mouseX >= 300 - raio) &&
    (mouseY <= 200 + raio) &&
    (mouseY >= 200 - raio)
    ) {
      alert('VOCE ACERTOU O CENTRO DO ALVO!')
    }
}

tela.addEventListener('click', dispara)