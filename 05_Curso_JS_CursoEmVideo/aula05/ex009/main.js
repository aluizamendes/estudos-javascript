// valores
let btnVerifificar = document.getElementById("verificar");
let sexo = document.getElementsByName("sexo");
let res = document.getElementById("resultado");
let sexoMasc = sexo[0];
let sexoFem = sexo[1];
let data = new Date();
let anoAtual = data.getFullYear();

function verifica() {

  // atualizar o valor do input só DEPOIS que ele digita
  let nasc = document.getElementById("nascimento").value;

  let idade = anoAtual - nasc;

  if (nasc.length == 0 || nasc > anoAtual) {
    alert("ERRO. Verifique os dados e tente novamente!");

  } else {

    let genero = "";

    // cria uma tag img HTML
    let img = document.createElement("img");
    img.setAttribute("id", "foto");

    if (sexoMasc.checked == true) {

      genero = "homem";

      if (idade <= 4) {
        // bebê
        img.setAttribute("src", "img/homem-bebe.png");

      } else if (idade > 4 && idade <= 14) {
        // criança
        img.setAttribute("src", "img/homem-crianca.png");
        
      } else if (idade > 14 && idade <= 35) {
        // jovem
        img.setAttribute("src", "img/homem-jovem.png");

      } else if (idade > 35 && idade <= 60) {
        // adulto
        img.setAttribute("src", "img/homem-adulto.png");

      } else if (idade > 60) {
        // idoso
        img.setAttribute("src", "img/homem-idoso.png");
      }

      res.innerHTML = `<p>Detectamos um ${genero} de ${idade} anos.</p>`;
      
      // adiciona o elemento 'img' criado como filho do elemento 'res'
      res.appendChild(img);
    }

    if (sexoFem.checked == true) {

      genero = "mulher";

      if (idade <= 4) {
        // bebê
        img.setAttribute("src", "img/mulher-bebe.png");

      } else if (idade > 4 && idade <= 14) {
        //criança
        img.setAttribute("src", "img/mulher-crianca.png");
        
      } else if (idade > 14 && idade <= 35) {
        // jovem
        img.setAttribute("src", "img/mulher-jovem.png");

      } else if (idade > 35 && idade <= 60) {
        // adulta
        img.setAttribute("src", "img/mulher-adulta.png");

      } else if (idade > 60) {
        // idosa
        img.setAttribute("src", "img/mulher-idosa.png");
      }

      res.innerHTML = `<p>Detectamos uma ${genero} de ${idade} anos.</p>`;
      res.appendChild(img);
    }
  }
}

btnVerifificar.addEventListener("click", verifica);