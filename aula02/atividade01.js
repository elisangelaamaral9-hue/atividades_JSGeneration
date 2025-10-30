const leia = require('readline-sync')

let n1, n2, n3, soma

console.log("\nDigite o primeiro número: ")
n1 = leia.questionInt()

console.log("\nDigite o segundo número: ")
n2 = leia.questionInt()

console.log("\nDigite o terceiro número: ")
n3 = leia.questionInt()

soma = (n1+n2)

if (soma>n3){
    console.log("\nA soma é maior que o terceiro número! ")
}else if (soma<n3){
    console.log("\nA soma é menor que o terceiro número! ")
}else{
    console.log("\nA soma é igual ao terceiro número! ")
}
console.log("Boa tarde!")