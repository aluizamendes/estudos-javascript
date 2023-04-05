let tela = document.querySelector("canvas")
let ctx = tela.getContext("2d")

function desenhaQuadrado(x, y, cor) {
  ctx.fillStyle = cor
  ctx.fillRect(x, y, 50, 50)
  ctx.fillStroke = "black"
  ctx.strokeRect(x, y, 50, 50)
}

/* let x = 0

while ( x < 600) {
  desenhaQuadrado(x, 0, "green")
  desenhaQuadrado(x, 50, "pink")
  desenhaQuadrado(x, 100, "lightblue")
  x = x + 50
} */

for (let x = 0; x < 600; x += 50) {
  desenhaQuadrado(x, 0, "pink")  
}