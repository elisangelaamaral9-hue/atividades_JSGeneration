// Importando biblioteca
const leia = require('readline-sync')

let n1, n2, n3, n4
console.log("\nDigite o numero 01: ")
n1 = leia.questionFloat()

console.log("\nDigite o numero 02: ")
n2 = leia.questionFloat()

console.log("\nDigite o numero 03: ")
n3 = leia.questionFloat()

console.log("\nDigite o numero 04: ")
n4 = leia.questionFloat()

const valor01 = (n1 * n2)
const valor02 = (n3 * n4)
diferenca = valor01 - valor02
    
console.log("\nA diferenca de valor é: " + diferenca)