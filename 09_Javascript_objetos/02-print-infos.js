const cliente = {
    nome: "Carlos",
    idade: 36,
    cpf: "34232454",
    email: "carlos@email.com"
}

console.log(`Meu nome é ${cliente.nome} e eu tenho ${cliente.idade} anos.`)
console.log(cliente.cpf.substring(0, 3)) 
// a função `subtring` vai "recortar" um pedaço da string do cpf, retornando apenas os 3 primeiros numeros.


// usando colchetes
const chaves = ["nome", "idade", "cpf", "email"]

console.log(cliente[chaves[3]])
console.log("-------------------------------------------------")

chaves.forEach(info => console.log(cliente[info]))
