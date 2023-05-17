// `n3 = 0` define valor padrão para n3 caso ele não seja definido
function somar(n1,n2, n3 = 0) {
    return n1 + n2 + n3
}

let numeros = [5, 4]
let numeros2 = [5, 4, 1]

// usando spread operator para espalhar os elementos do array no argumento da função
let resultado = somar(...numeros)
let resultado2 = somar(...numeros2)

console.log(resultado) // 9
console.log(resultado2) // 10