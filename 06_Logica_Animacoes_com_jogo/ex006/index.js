let tela = document.querySelector("canvas")
let pincel = tela.getContext("2d")

pincel.fillStyle = 'lightgray';
pincel.fillRect(0, 0, 600, 400);

function desenhaCirculo(x, y, raio, cor) {
  pincel.fillStyle = cor;
  pincel.beginPath();
  pincel.arc(x, y, raio, 0, 2*3.14);
  pincel.fill();
}

function desenhaFlor(x, y) {
  desenhaCirculo(x, y, 10, "red");
  desenhaCirculo(x, y - 20, 10, "yellow");
  desenhaCirculo(x, y + 20, 10, "blue");
  desenhaCirculo(x + 20, y, 10, "black");
  desenhaCirculo(x - 20, y, 10, "orange");
}

desenhaFlor(300, 200);
