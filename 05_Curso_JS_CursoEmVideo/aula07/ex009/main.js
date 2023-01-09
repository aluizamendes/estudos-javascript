const inputNumero = document.getElementById("numero");
const btnFinalizar = document.getElementById("btnFinalizar");
const btnAdd = document.getElementById("btnAdicionar");
let valoresDiv = document.getElementById("valores");
let res = document.getElementById("res");

// array com todos os números/valores
let valores = [];

inputNumero.focus();

function adicionarNumero() {

  res.style.display = "none";
  
  let numero = Number(inputNumero.value);

  if (numero >= 1 && numero <= 100) {

    // verificar se o valor digitado pelo usuário já existe dentro do array para evitar repetidos
    let repete = false;

    for (i = 0; i < valores.length; i++) {      
      if (numero == valores[i]) {
        alert(`O número ${numero} já foi adicionado.`);

        inputNumero.value = "";
        inputNumero.focus();

        repete = true;
        break;
      }
    }
    if (repete == false) {
      valores.push(numero);
      valoresDiv.innerHTML += `<p>Valor ${numero} adicionado.</p>`;

      inputNumero.value = "";
      inputNumero.focus();
    }
  }
   else {
    alert("[NÚMERO INVÁLIDO] Por favor, insira um número apenas entre 1 e 100.");

    inputNumero.value = "";
    inputNumero.focus();
  } 
  console.log(valores); 
}

function calcularAnalise() {

  if (valores.length == "") {
    alert("É necessário inserir valores para finalizar!");

  } else {
    res.style.display = "block";

    // mostrar quantidade total de numeros cadastrados
    res.innerHTML = `<p>Ao todo temos ${valores.length} valores cadastrados.</p>`;
  
    // informar qual o maior e menor valor
      // comparar entre os índices
    let maiorValor = valores[0];
    let menorValor = valores[0];
    
    for (i = 0; i < valores.length; i++) {
      if (valores[i] > maiorValor) {
        maiorValor = valores[i];
      }
      else if (valores[i] < menorValor) {
        menorValor = valores[i];
      }
    }
    res.innerHTML += `<p>O maior valor registrado é ${maiorValor}.</p>`;
    res.innerHTML += `<p>O menor valor registrado é ${menorValor}.</p>`;
  
    // somar todos os valores
    let somaTotValores = 0;
  
    for (i = 0; i < valores.length; i++) {
      somaTotValores += valores[i];
    }
    res.innerHTML += `<p>A soma de todos os valores é igual a ${somaTotValores}.</p>`;
  
    // calcular a média dos valores
      // pegar a soma de todos os valores do array e dividir pelo total de elementos
    let mediaValores = somaTotValores / valores.length;
    res.innerHTML += `<p>A média dos valores é igual a ${mediaValores.toFixed(2)}</p>`;
  }
}

// event listeners
btnAdd.addEventListener("click", adicionarNumero);
btnFinalizar.addEventListener("click", calcularAnalise);
