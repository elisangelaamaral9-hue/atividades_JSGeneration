import readlineSync = require("readline-sync")

const setNumero: Set<number> = new Set<number>([2, 5, 1, 3, 4, 9, 7, 8, 10, 6]);

console.log("\nDigite um numero que quer localizar: ")
const opcao = readlineSync.questionInt()

if (setNumero.has(opcao)){
    console.log(`\nO número ${opcao} foi encontrado!`)
}else{
    console.log(`\nO número ${opcao} não foi encontrado!`)
}