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

let relatorio = ""

// percorre o nome de cada chave do objeto
for (info in cliente) {

    if (typeof cliente[info] === "object" || typeof cliente[info] === "function") {
        continue // continua e não faz nada, ignora a chave

    } else {
        relatorio += `${info} => ${cliente[info]} \n`
    }
}

console.log(relatorio)