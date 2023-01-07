function carregar() {

  let msg = document.getElementById("msg");
  let img = document.getElementById("img");
  let title =  document.querySelector(".titulo");
  let data = new Date();
  let hora = data.getHours();
  let minuto = data.getMinutes();

  msg.innerHTML = `Agora são ${hora} horas e ${minuto} minutos.`;

  if (hora >= 0 && hora < 12) {
    // bom dia
    img.src = "fotodia.png";
    document.body.style.backgroundColor = "#efe7da";

  } else if (hora >= 12 && hora <= 18) {
    // boa tarde
    img.src = "fototarde.png";
    document.body.style.backgroundColor = "#d5beab";

  } else if (hora > 18) {
    // boa noite
    img.src = "fotonoite.png";
    document.body.style.backgroundColor = "#453765";
    title.style.color = "white";
  }
}

