const leia = require("readline-sync")

let numero =[2, 5, 1, 3, 4, 9, 7, 8, 10, 6]

let opcao, posicao = -1

console.log("Digite um número")
opcao = leia.questionInt()

  for (let i = 0; i < 10; i++){
      
    if (numero[i]===opcao){
       posicao = i
       break;
    }
}
  
 if (posicao>=0){
    console.log("\nO número está na posição "+posicao)
    }else{
     console.log("\nNúmero não encontrado")
    }

