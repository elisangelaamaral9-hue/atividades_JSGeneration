const leia = require('readline-sync')

let saldo, saque, valor, depo, valor01

console.log("######### CAIXA AQUI ############")
console.log("\nOPÇÃO 1 - Saldo: ")
console.log("OPÇÃO 2 - Saque")
console.log("OPÇÃO 3 - Depósito")

console.log("\nDigite opção: ")
opcao = leia.questionInt()

saldo = 1000.00

switch (opcao){
    case 1: 
        console.log("Esse é seu saldo atual: "+saldo)
        break;
    
     case 2:
        console.log("Digite o valor que deseja sacar: ")
        saque = leia.questionFloat()
        valor01 = (saldo-saque)
        if (valor01<=0){
                 console.log("Valor não disponível!")
        }else{
                console.log("Esse é seu saldo atual: "+valor01)
            }
        break;

    case 3:
        console.log("Esse é seu saldo atual: "+saldo)
        console.log("\nDigite o valor do depósito: ")
        depo = leia.questionFloat()
        valor = (saldo+depo)
        console.log("Esse é seu saldo atual: "+valor)
        break;
        default: 
            console.log("Opção inválida, escolha de 1 ao 3!")
    
}