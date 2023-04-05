let tela = document.querySelector('canvas')
let ctx = tela.getContext('2d')

let serie2015 = [50, 25, 20, 5]
let serie2016 = [65, 20, 13, 2]
let cores = ['blue', 'green', 'yellow', 'red']
let navegadores = ['Google Chrome', 'Firefox', 'Safari', 'Outros']

function desenhaTexto(texto, x, y) {
  ctx.font = '15px Georgia'
  ctx.fillStyle = 'black'
  ctx.fillText(texto, x, y) 
}

function desenhaRetangulo(x, y, largura, altura, cor) {
  ctx.fillStyle = cor
  ctx.fillRect(x, y, largura, altura)
  ctx.strokeStyle = 'black'
  ctx.strokeRect(x, y, largura, altura)
}

function desenhaBarra(x, y, serie, cores, texto) {
  desenhaTexto(texto, x, y - 15)

  let somaY = y

  for (let i = 0; i < serie.length; i++) {
    desenhaRetangulo(x, somaY, 50, serie[i], cores[i])
    somaY += serie[i]
  }
} 

function desenhaLegenda(x, y, navegadores, cores) {  
  let larguraQuadradoLegenda = 10
  let alturaQuadradoLegenda = 10

  let margemLegendaEsquerda = 20 
  let legendaY = y

  for (let i = 0; i < navegadores.length; i++) {
    desenhaRetangulo(x, legendaY, larguraQuadradoLegenda, alturaQuadradoLegenda, cores[i])
    desenhaTexto(navegadores[i], x + margemLegendaEsquerda, legendaY + alturaQuadradoLegenda)
    legendaY += 20
  }
}

desenhaBarra(50, 50, serie2015, cores, '2015')
desenhaBarra(150, 50, serie2016, cores, '2016')
desenhaLegenda(50, 200, navegadores, cores)