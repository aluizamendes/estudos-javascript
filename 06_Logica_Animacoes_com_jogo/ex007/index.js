let tela = document.querySelector("canvas")
let pincel = tela.getContext("2d")

function desenhaQuadrado(x, y, tamanho, cor) {
  pincel.fillStyle = cor
  pincel.fillRect(x, y, tamanho, tamanho)
  pincel.strokeStyle = "black"
  pincel.strokeRect(x, y, tamanho, tamanho)
}

function desenhaTexto(texto, x, y) {
  pincel.font = "20px Georgia"
  pincel.fillStyle = "black"
  pincel.fillText(texto, x, y)
}

let y = 50
desenhaTexto("Qual a fração?", 50, 30)
desenhaQuadrado(50, y, 100, "green")
desenhaQuadrado(150, y, 100, "green")
desenhaQuadrado(250, y, 100, "green")
desenhaQuadrado(350, y, 100, "white")
