const leia = require("readline-sync")

let idade01 = 0, idade02 = 0, idade, contador = 1

//Entrada
while(contador){
    idade = leia.questionInt("Digite a idade: ")

    if (idade<0) {
    break;
  } else if(idade>50) {
    idade02++
  }else if(idade<21){
    idade01++
   }else{
    console.log("\nDigite uma idade menor que 21 ou maior que 50!\n")
  }

}

//Saida
console.log("\nQuantidade de idades menor que 21 são "+idade01+" e quantidade de idades maior que 50 são "+idade02)
console.log("Boa noite!!")
