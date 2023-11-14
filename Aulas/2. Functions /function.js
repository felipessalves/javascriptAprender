// Verbo + Substantivo

// Função Altera Cor
let corSite = 'azul'

function resetaCor(cor, tonalidade, país){
    corSite = cor + ' ' + tonalidade + ' ' + país;
};

console.log(corSite);

resetaCor("verde", "escuro", "Brasil");

console.log(corSite);

//Função Altera Valor
let valor = 6;

function alteraValor(valorNovo){
    valor = valorNovo;
};

console.log(valor);
alteraValor(10);
console.log(valor);
