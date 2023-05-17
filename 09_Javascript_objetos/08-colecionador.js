const colecionador = {
    nome: "João do Gibi",
    idade:41,
    tipocolecao: ["quadrinhos"],
    contato: "joao@email.com",

    adicionarTipo(propriedade, tipo) {
        this[propriedade].push(tipo)
    }
}

for (i = 0; i < 4; i++) {
    colecionador.adicionarTipo("tipocolecao", "HQ" + i)
}

console.log(colecionador["nome"])
// objetos tbm são classificados como um array associativo

console.log(colecionador)