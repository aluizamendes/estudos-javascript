var p1 = document.getElementsByTagName("p")[1];
var msg = document.getElementById("msg");

p1.style.color = "yellow"
document.write("Está escrito assim: ", p1.innerHTML);

msg.style.background = "green";
msg.innerText = "Estou aguardando...";