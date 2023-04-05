let tela = document.querySelector("canvas")
let ctx = tela.getContext("2d")

ctx.fillStyle = "grey" 
ctx.fillRect(0, 0, 600, 400)

ctx.fillStyle = "green"
ctx.fillRect(0, 0, 200, 400)

ctx.fillStyle = "red"
ctx.fillRect(400, 0, 200, 400)

ctx.fillStyle = "yellow"
ctx.beginPath() // comecar um novo caminho
ctx.moveTo(300, 200) // ponto de inicio
ctx.lineTo(200, 400)
ctx.lineTo(400, 400)
ctx.fill() // preencher

ctx.fillStyle = "blue"
ctx.beginPath()
ctx.arc(300, 200, 50, 0, 2 * 3.14)
ctx.fill()
