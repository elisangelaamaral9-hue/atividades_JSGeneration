// Importando biblioteca
const leia = require('readline-sync')

let salario, desconto, extra, adicional

console.log("Digite o seu salario: ")
salario = leia.questionFloat()

console.log("Digite o desconto: ")
desconto = leia.questionFloat()

console.log("Digite as horas extras: ")
extra = leia.questionFloat()

console.log("Digite seu adicional noturno: ")
adicional = leia.questionFloat()

soma = (salario+(extra*5)+adicional)-desconto
    
console.log("O valor final do seu salario e: " + soma)
