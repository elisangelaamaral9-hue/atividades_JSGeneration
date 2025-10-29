const leia = require('readline-sync')

let salario, abono
console.log("Digite seu salario: ")
salario = leia.questionFloat()

console.log("O valor a receber e: " + salario)