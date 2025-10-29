// Importando biblioteca
const leia = require('readline-sync')

let nota01, nota02, nota03, nota04
console.log("Digite a nota 01: ")
nota01 = leia.questionFloat()

console.log("Digite a nota 02: ")
nota02 = leia.questionFloat()

console.log("Digite a nota 03: ")
nota03 = leia.questionFloat()

console.log("Digite a nota 04: ")
nota04 = leia.questionFloat()

soma = (nota01+nota02+nota03+nota04)/4
    
console.log("Sua nota final e: " + soma)
