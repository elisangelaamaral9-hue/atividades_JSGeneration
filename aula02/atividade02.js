const leia = require('readline-sync')

let numero

console.log("\nDigite um número: ")
numero = leia.questionInt()

if (numero%2 === 0){
    console.log("\nO número é par!")
}else{
    console.log("\nO número é impar!")
}
if(numero > 0){
    console.log("Este número é positivo!")
}else if(numero<0){
    console.log("Este número é negativo!")
}

console.log("Boa tarde!")