const cliente = {
    nome: "Carlos",
    idade: 36,
    cpf: "34232454",
    email: "carlos@email.com",
    fones: ["5521986488749", "5511987635467"]
}

cliente.dependentes = {
    nome: "Sara",
    nascimento: "20/03/2011",
    parentesco: "filha"
}

cliente.dependentes.nome = "Sara Silva"

console.log(cliente)