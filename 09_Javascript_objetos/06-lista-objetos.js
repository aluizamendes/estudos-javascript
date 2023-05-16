const cliente = {
    nome: "Carlos",
    idade: 36,
    cpf: "34232454",
    email: "carlos@email.com",
    fones: ["5521986488749", "5511987635467"],
    dependentes: [{
        nome: "Sara",
        nascimento: "20/03/2011",
        parentesco: "filha"
    }]
}

const novoDependente = {
    nome: "Pedro",
    nascimento: "12/08/2017",
    parentesco: "filho" 
}

cliente.dependentes.push(novoDependente)
console.log(cliente)

console.log("---------------------------------------------------------")

const filhaMaisNova = cliente.dependentes.filter(dependente => dependente.nascimento === "12/08/2017")

console.log(filhaMaisNova[0].nome)
