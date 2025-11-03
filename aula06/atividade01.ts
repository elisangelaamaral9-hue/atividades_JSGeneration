import * as readlineSync from "readline-sync";

const cores: Array<string> = new Array<string>();

//Entrada
for (let i = 0; i < 5; i++) {
  const cor = readlineSync.question(`Digite a ${i + 1}ª cor: `);
  cores.push(cor);
}

//Saída
console.log("\nEssas foram as cores digitadas:");
console.log(cores);

const coresOrdenadas = [...cores].sort();

console.log("\nCores em ordem crescente:");
console.log(coresOrdenadas);