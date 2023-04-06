let canvas = document.querySelector('canvas')
let ctx = canvas.getContext('2d')
let pnts = document.getElementById('pontos')

let raio = 10
let pontuacao = parseInt(pnts.textContent)

function geraNumeroAleatorio(max) {
  return Math.floor(Math.random() * max)
}

function limpaTela() {
  ctx.clearRect(0, 0, 600, 400)
}

function desenhaCirculo(x, y, raio, cor) {
  ctx.fillStyle = cor
  ctx.beginPath()
  ctx.arc(x, y, raio, 0, 2 * Math.PI)
  ctx.fill()
}

function desenhaAlvo(x, y) {
  desenhaCirculo(x, y, raio + 20, 'red')
  desenhaCirculo(x, y, raio + 10, 'white')
  desenhaCirculo(x, y, raio, 'red')
}

let posXCirculo = 0
let posYCirculo = 0

function atualizaTela() {
  posXCirculo = geraNumeroAleatorio(600)
  posYCirculo = geraNumeroAleatorio(400)
  limpaTela()
  desenhaAlvo(posXCirculo, posYCirculo)
}

function verificaAcerto(e) {
  let mouseX = e.pageX - canvas.offsetLeft
  let mouseY = e.pageY - canvas.offsetTop

  if ( (mouseX >= posXCirculo - raio) 
    && (mouseX <= posXCirculo + raio)
    && (mouseY >= posYCirculo - raio)
    && (mouseY <= posYCirculo + raio)) {

    ganhaPonto()

  } else {
    perdePonto()
  }
  // console.log(`x: ${mouseX}, y: ${mouseY}`)
}

function ganhaPonto() {
  pontuacao = parseInt(pnts.textContent) + 1
  pnts.textContent = pontuacao
}

function perdePonto() {
  if (pontuacao == 0) {
    pontuacao = parseInt(pnts.textContent)
    pnts.textContent = pontuacao

  } else {
    pontuacao = parseInt(pnts.textContent) - 1
    pnts.textContent = pontuacao
  }
}

let velocidadeDoAlvo = 1000

setInterval(atualizaTela, velocidadeDoAlvo)
canvas.addEventListener('click', verificaAcerto)