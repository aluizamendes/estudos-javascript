let arr = [1, 2, 3]
let arr2 = [4, 5, 6]

let arr3 = [...arr] // espalha os elementos de arr

arr3.push(7, 8, 9)

console.log(arr) // [ 1, 2, 3 ]
console.log(arr3) // [ 1, 2, 3, 7, 8, 9 ]
