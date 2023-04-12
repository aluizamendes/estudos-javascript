const form = document.getElementById("novoItem")
const lista = document.getElementById("lista")
const itens =  JSON.parse(localStorage.getItem("itens")) || []

itens.forEach((elemento) => {
  criaElemento(elemento)
});

form.addEventListener("submit", (e) => {
  e.preventDefault()  

  const itemAtual = {
    nome: nome.value, 
    quantidade: quantidade.value
  }

  let repetiu = false

  // iterar sobre os itens na lista
  // se repetir, atualizar a quantidade 
  for (let i = 0; i < itens.length; i++) {
    
    if (itens[i].nome == nome.value) {      

      // atribui o id do `itemAtual` o id do objeto encontrado, ou seja, permanece o mesmo
      itemAtual.id = itens[i].id

      atualizaElemento(itemAtual)

      //itens[i] = itemAtual
      itens[itens.findIndex(elemento => elemento.id === itens[i].id)] = itemAtual

      repetiu = true
    }
  }

  // se não, criar o novo item
  if (repetiu == false) {    

    // cria propriedade `id` no objeto a partir do length do array itens
    itemAtual.id = itens[itens.length - 1] ? (itens[itens.length - 1]).id + 1 : 0

    criaElemento(itemAtual)
    itens.push(itemAtual)
  }
  
  localStorage.setItem("itens", JSON.stringify(itens) )   

  // limpa valor dos inputs
  nome.value = ""
  quantidade.value = ""
})

function atualizaElemento(item) {
  // seleciona a tag `strong` pelo data-id, substituindo o `innerHTML`
  document.querySelector(`[data-id="${item.id}"]`).innerHTML = item.quantidade
}

function criaElemento(item) {
  // cria elemento com tag li
  const novoItem = document.createElement("li")
  
  // adicionar classe no novo elemento li
  novoItem.classList.add("item")

  // cria elemento com tag strong
  const numeroItem = document.createElement("strong")
  numeroItem.innerHTML = item.quantidade
  numeroItem.dataset.id = item.id

  novoItem.appendChild(numeroItem)
  novoItem.innerHTML += item.nome

  lista.appendChild(novoItem)
  novoItem.appendChild(botaoDeletar(item.id))
}

function deletaElemento(tag, id) {
  tag.remove() // remove a tag html

  itens.splice(itens.findIndex(elemento => elemento.id === id) , 1)

  localStorage.setItem("itens", JSON.stringify(itens) )   
  console.log(itens)
}

// cria elemento do botão e chama funcao `deletaElemento`
function botaoDeletar(id) {
  const btnDeletar = document.createElement("button")
  btnDeletar.innerHTML = "X"

  btnDeletar.addEventListener("click", function() {
    deletaElemento(this.parentNode, id)
  })

  return btnDeletar
}