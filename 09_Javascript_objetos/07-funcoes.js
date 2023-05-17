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
    }, {
        nome: "Pedro",
        nascimento: "12/08/2017",
        parentesco: "filho" 
    }],
    saldo: 400,

    depositar(valor) {
        this.saldo += valor
    }
}

console.log(cliente.saldo)

cliente.depositar(120)

console.log(cliente.saldo)

