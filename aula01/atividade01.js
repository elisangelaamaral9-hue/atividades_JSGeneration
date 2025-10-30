// Importando biblioteca
const leia = require('readline-sync')

let salario, abono
console.log("Digite seu salario: ")
salario = leia.questionFloat()

console.log("\nDigite o abono: ")
abono = leia.questionFloat()

soma = (salario+abono)

console.log("O valor a receber e: " + soma)
