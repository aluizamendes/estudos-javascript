let tela = document.querySelector("canvas")
let ctx = tela.getContext("2d")

ctx.fillStyle = "white" 
ctx.fillRect(0, 0, 600, 600)

// triangulo de fora
ctx.fillStyle = "black"
ctx.beginPath()
ctx.moveTo(50, 50)
ctx.lineTo(50, 400)
ctx.lineTo(400, 400)
ctx.fill()

// triangulo de dentro
ctx.fillStyle = "white"
ctx.beginPath()
ctx.moveTo(100, 175)
ctx.lineTo(100, 350)
ctx.lineTo(275, 350)
ctx.fill()
