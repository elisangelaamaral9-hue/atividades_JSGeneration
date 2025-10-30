const leia = require('readline-sync')

let opcao, quant, valor, soma

console.log("######### CARDÁRPIO LANCHES DO NICO ############")
console.log("\nOPÇÃO 1 - Cachorro Quente:R$ 10.00")
console.log("OPÇÃO 2 - X-Salada:R$ 15.00")
console.log("OPÇÃO 3 - X-Bacon:R$ 18.00")
console.log("OPÇÃO 4 - Bauru:R$ 12.00")
console.log("OPÇÃO 5 - Refrigerante:R$ 8.00")
console.log("OPÇÃO 6 - Suco de laranja:R$ 13.00")

console.log("\nDigite um número: ")
opcao = leia.questionInt()

switch (opcao){
    case 1: 
        console.log("Digite a quantidade: ")
        quant = leia.questionFloat()
        soma = (quant*10.0)
        valor = soma
        console.log("\nCachorro quente no valor de " + valor +". Obrigada por ser nosso cliente!")
        break;
    
     case 2:
        console.log("Digite a quantidade: ")
        quant = leia.questionFloat()
        soma = (quant*15.00)
        valor = soma
        console.log("\nX-Salada no valor de " +valor+ ". Obrigada por ser nosso cliente!")
        break;

    case 3:
        console.log("Digite a quantidade: ")
        quant = leia.questionFloat()
        soma = (quant*18.00)
        valor = soma
        console.log("\nX-Bacon de " +valor+ ". Obrigada por ser nosso cliente!")
        break;
    
    case 4:
        console.log("Digite a quantidade: ")
        quant = leia.questionFloat()
        soma = (quant*12.00)
        valor = soma
        console.log("\nBauru de " +valor+ ". Obrigada por ser nosso cliente!")
        break;

    case 5:
        console.log("Digite a quantidade: ")
        quant = leia.questionFloat()
        soma = (quant*8.00)
        valor = soma
        console.log("\nRefrigerante de " +valor+ ". Obrigada por ser nosso cliente!")
        break;
    
    case 6:
        console.log("Digite a quantidade: ")
        quant = leia.questionFloat()
        soma = (quant*13.00)
        valor = soma
        console.log("\nSuco de Laranja " +valor+ ". Obrigada por ser nosso cliente!")
        break;
        default: 
            console.log("Opção inválida, escolha de 1 à 6!")
    
}