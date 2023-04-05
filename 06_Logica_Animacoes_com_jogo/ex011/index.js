let tela = document.querySelector('canvas')
let ctx = tela.getContext('2d')

ctx.fillStyle = 'lightgrey'
ctx.fillRect(0, 0, 600, 400)

let cores = ['blue', 'red', 'green', 'white']
let indice = 0  
let corSelecionada = cores[indice] // inicializada com o indice zero

// seleciona cor do circulo
tela.addEventListener('contextmenu', () => {
  
  if (indice >= cores.length - 1) {
    indice = 0
  } else {
    indice = indice + 1
  }

  corSelecionada = cores[indice] // atualiza a corSelecionada para a nova cor
})

let desenha = false
let raio = 10 

function habilitarDesenho() {
  desenha = true
}

function desabilitarDesenho() {
  desenha = false
}

function desenhaCirculo(event) {

  if (desenha == true) {
    
    let mouseX = event.pageX - tela.offsetLeft
    let mouseY = event.pageY - tela.offsetTop
  
    if (event.shiftKey && raio < 40) {
      raio = raio + 10 // incrementa o valor de raio    
    }
  
    else if (event.altKey && raio > 10) {
      raio = raio - 5 // decrementar o valor de raio
    }
  
    ctx.fillStyle = corSelecionada
    ctx.beginPath()
    ctx.arc(mouseX, mouseY, raio, 0, 2 * 3.14)
    ctx.fill()
    
    console.log(raio)
  }
}

tela.addEventListener('mousedown', habilitarDesenho)
tela.addEventListener('mousemove', desenhaCirculo)
tela.addEventListener('mouseup', desabilitarDesenho)