let tela = document.querySelector("canvas")
let ctx = tela.getContext("2d")

ctx.fillStyle = "green" 
ctx.fillRect(0, 0, 600, 400)

// losango
ctx.fillStyle = "yellow"
ctx.beginPath()
ctx.moveTo(300, 50)
ctx.lineTo(50, 200)
ctx.lineTo(300, 350)
ctx.fill()

ctx.beginPath()
ctx.moveTo(300, 50)
ctx.lineTo(550, 200)
ctx.lineTo(300, 350)
ctx.fill()

// circulo
ctx.fillStyle = "darkblue"
ctx.beginPath()
ctx.arc(300, 200, 100, 0, 2 * 3.14)
ctx.fill()
