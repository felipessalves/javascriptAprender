// Operador Lógico && - AND - Retorna TRUE se os dois operandos forem true 

console.log(true && true);
console.log(true && false);

let maiordeIdade = false;
let possuiCarteiraDeTrabalho = true;
let podeAplicar = maiordeIdade && possuiCarteiraDeTrabalho;

console.log(podeAplicar);

//Operador Lógico OR (||)
//Retorna true se um dos operandos forem true

maiordeIdade = false;
possuiCarteiraDeTrabalho = true;
podeAplicar = maiordeIdade || possuiCarteiraDeTrabalho;

console.log("Já pode tentar uma vaga?", podeAplicar);

//Operador Lógico NOT (!)
//

maiordeIdade = false;
Documento_RG = true;
podeBeber = maiordeIdade && possuiCarteiraDeTrabalho;

let liberadoProDrink = !podeBeber;

console.log("Já tem idade pra beber?", liberadoProDrink);