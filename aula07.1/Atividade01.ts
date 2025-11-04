import leia = require("readline-sync")
import { Queue } from "../aula07/Queue";

const fila = new Queue<String>()
let opcao, nome

do {

console.log("\n#####################MENU##################")
console.log("Opção 1: Adicionar Cliente na Fila")
console.log("Opção 2: Listar todos os Clientes")
console.log("Opção 3: Retirar Cliente da Lista")
console.log("Opção 0: Sair")

console.log("\nDigite uma opção: ")
opcao = leia.questionInt()

    switch(opcao){
    case 1: 
        console.log("\nQual o nome do cliente a ser adicionado na fila: ");
        nome = leia.question()
        fila.enqueue(nome);
        break;

    case 2:
        console.log("\nEssas são as pessoas na fila: ");
        fila.printQueue()
        break;
    
    case 3:
        console.log("\nDigite o nome para retirar da fila: ");
        fila.dequeue()
        break;
    
    case 0: 
        console.log("\nSistema encerrado!")
        break;
    default:
        console.log("\nOpção inválida! Tente novamente.");
        break;
}


}while(opcao!==0);