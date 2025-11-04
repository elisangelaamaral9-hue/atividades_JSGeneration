import leia = require("readline-sync")
import {Stack} from "../aula07/Stack";

const fila = new Stack<String>()
let opcao, nome

do {

console.log("\n#####################MENU##################")
console.log("Opção 1: Adicionar Livro na Fila")
console.log("Opção 2: Listar todos os Livro")
console.log("Opção 3: Retirar Livro da Lista")
console.log("Opção 0: Sair")

console.log("\nDigite uma opção: ")
opcao = leia.questionInt()

    switch(opcao){
    case 1: 
        console.log("\nQual o nome do livro a ser adicionado na fila: ");
        nome = leia.question()
        fila.push(nome);
        console.log("\nLivro adicionado!")
        break;

    case 2:
        console.log("\nEssas são as pessoas na fila: ");
        fila.printStack()
        break;
    
    case 3:
        console.log("\nDigite o nome para retirar da fila: ");
        fila.pop()
        break;
    
    case 0: 
        console.log("\nSistema encerrado!")
        break;
    default:
        console.log("\nOpção inválida! Tente novamente.");
        break;
}


}while(opcao!==0);