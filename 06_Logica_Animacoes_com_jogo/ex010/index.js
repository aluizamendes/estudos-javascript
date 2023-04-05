let tela = document.querySelector('canvas')
let ctx = tela.getContext('2d')

ctx.fillStyle = 'lightgrey'
ctx.fillRect(0, 0, 600, 400)

/* 
A cada clique do botão DIREITO do mouse, a cor padrão, que é blue, deverá se tornar red. 
Se o usuário clicar mais uma vez com o botão DIREITO, a cor escolhida deverá ser green, nessa ordem. 
Por fim, se clicarmos novamente, voltamos para a cor blue e repetimos a ordem de seleção de cores. 
*/

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


let raio = 10 

tela.addEventListener('mousedown', (event) => {  
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
  //console.log(event)
  console.log(raio)
})


