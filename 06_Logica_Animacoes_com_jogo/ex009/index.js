let tela = document.querySelector('canvas')
let ctx = tela.getContext('2d')

function desenhaEsquadro(xa, ya, xc, yc, cor) {
  ctx.fillStyle = cor
  ctx.beginPath()
  ctx.moveTo(xa, ya)
  ctx.lineTo(xa, yc)
  ctx.lineTo(xc, yc)
  ctx.fill()
}

desenhaEsquadro(50, 50, 400, 400, 'black')
desenhaEsquadro(100, 175, 275, 350, 'white')