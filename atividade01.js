const leia = require("readline-sync")

let num_par = 0, num_impar = 0, numero

//Entrada
for (let i = 1; i <= 10; i++) {
  console.log("Digite um número: ")
  numero = leia.questionInt()
  console.log("O " + i + "º número digitado foi: " + numero)

  if (numero % 2 === 0) {
    num_par++
  } else {
    num_impar++
  }
}

//Saida
console.log("Quantidade de números pares: "+num_par+ " e quantidade de números impares: "+num_impar)
console.log("Boa noite!!")
