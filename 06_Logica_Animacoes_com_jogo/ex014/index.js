let tela = document.querySelector('canvas')
let ctx = tela.getContext('2d')

ctx.fillStyle = 'white'
ctx.fillRect(0, 0, 600, 400)

function desenhaCirculo(x, y, raio) {

  ctx.fillStyle = 'blue'
  ctx.beginPath()
  ctx.arc(x, y, raio, 0, 2 * Math.PI)
  ctx.fill()
}

function limpaTela() {
  ctx.clearRect(0, 0, 600, 400)
}

let raio = 10
let posX = 300
let posY = 200
let sentido = 1

function atualizaTela() {

  limpaTela()

  if (posX + raio > 600) {
    sentido = -1
  }

  else if (posX - raio < 0) {
    sentido = 1
  }

  desenhaCirculo(posX, posY, raio)
  posX = posX + sentido * 4

  //console.log(posX)
}

setInterval(atualizaTela, 10)