const clientes = [
    {
        nome: "Carlos",
        cpf: "34232454",
        dependentes: [{
            nome: "Sara",
            nascimento: "20/03/2011",
            parentesco: "filha"
        }, {
            nome: "Pedro",
            nascimento: "12/08/2017",
            parentesco: "filho" 
        }]
    }, 
    {
        nome: "Juliana",
        cpf: "10972635",
        dependentes: [{
            nome: "Sofia",
            nascimento: "20/02/2019",
            parentesco: "filha"
        }]
    }
]

const listaDependentes = [...clientes[0].dependentes,...clientes[1].dependentes]

console.table(listaDependentes)
/*
┌─────────┬─────────┬──────────────┬────────────┐
│ (index) │  nome   │  nascimento  │ parentesco │
├─────────┼─────────┼──────────────┼────────────┤
│    0    │ 'Sara'  │ '20/03/2011' │  'filha'   │
│    1    │ 'Pedro' │ '12/08/2017' │  'filho'   │
│    2    │ 'Sofia' │ '20/02/2019' │  'filha'   │
└─────────┴─────────┴──────────────┴────────────┘
*/