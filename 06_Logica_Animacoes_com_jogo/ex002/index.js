let tela = document.querySelector("canvas")
let ctx = tela.getContext("2d")

ctx.fillStyle = "lightgrey" 
ctx.fillRect(0, 0, 600, 400)

// cabeca
ctx.fillStyle = "darkgreen"
ctx.fillRect(0, 0, 350, 300)

// olhos
ctx.fillStyle = "black"
ctx.fillRect(50, 60, 90, 90)
ctx.fillRect(210, 60, 90, 90)

// nariz
ctx.fillRect(140, 150, 70, 100)
//           x     y   w    h

// boca
ctx.fillRect(100, 190, 40, 110)
ctx.fillRect(210, 190, 40, 110)
