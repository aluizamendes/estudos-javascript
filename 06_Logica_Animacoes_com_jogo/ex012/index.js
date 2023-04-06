let tela = document.querySelector('canvas')
let ctx = tela.getContext('2d')
let inputCor = document.getElementById('cor')
let corEscolhida = inputCor.value

// tamanho do canvas
tela.height = 400
tela.width = 800

let desenha = false
let raio = 10 

function atualizaCorEscolhida() {
  corEscolhida = inputCor.value
}

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
  
    ctx.fillStyle = corEscolhida
    ctx.beginPath()
    ctx.arc(mouseX, mouseY, raio, 0, 2 * 3.14)
    ctx.fill()
    
    console.log(raio)
  }
}

tela.addEventListener('mousedown', habilitarDesenho)
tela.addEventListener('mousemove', desenhaCirculo)
tela.addEventListener('mouseup', desabilitarDesenho)
inputCor.addEventListener('input', atualizaCorEscolhida)