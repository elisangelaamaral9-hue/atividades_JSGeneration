import readlineSync = require("readline-sync")

const cores: Array<string> = new Array<string>();

//Entrada
for (let i = 0; i < 5; i++) {
  cores.push(readlineSync.question("Digite uma cor: "))
}

//Saída
console.log("\nEssas foram as cores digitadas: ")
for (let cor of cores){
    console.log(cor)
}

console.log("\nCores em ordem crescente: ");
const coresOrd = cores.sort();
for (let cor of coresOrd){
    console.log(cor)
}


